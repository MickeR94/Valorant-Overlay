const express = require('express')
const app = express();
const dotenv = require('dotenv')
dotenv.config()
const cors = require('cors');
app.use(cors());


const PORT = process.env._PORT || 5000;
const API_KEY = process.env.VALORANT_API_KEY;

app.get('/api/rank', async (req, res) => { 
    try {
        const response = await fetch('https://api.henrikdev.xyz/valorant/v3/mmr/eu/pc/Leahkim/2581', { 
            headers: { Authorization: API_KEY } 
        });
    
    const data = await response.json();
    res.json(data);
    } catch (error) {
        console.error('Something went wrong with the request: ', error);
        res.status(500).json({ error: 'Could not fetch rank-data' });
    }
    
});

// Server 
app.listen(PORT, () => {
    console.log(`Server is Running on PORT No.  ${PORT}.`)
})