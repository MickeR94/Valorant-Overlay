import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [rankName, setRankName] = useState('');
  const [rr, setRr] = useState(0);  
  const [currentTier, setCurrentTier] = useState(0);
  

  useEffect(() => {
        fetch('http://localhost:5000/api/rank')
          .then(response => response.json())
          .then(data => {
            setRankName(data.data.current.tier.name);
            setRr(data.data.current.rr);
            setCurrentTier(data.data.current.tier.id);
          })
    }, []);

    const nextTier = currentTier < 27 ? currentTier + 1 : 27;
    const currentIconURL = `https://media.valorant-api.com/competitivetiers/03621f52-342b-cf4e-4f86-9350a49c6d04/${currentTier}/largeicon.png`;
    const nextIconURL = `https://media.valorant-api.com/competitivetiers/03621f52-342b-cf4e-4f86-9350a49c6d04/${nextTier}/largeicon.png`;
    

  return (
    
    <div className='flex flex-col items-center'>
      <div className='text-center font-semibold mb-2'> Current Rank: {rankName} </div>
      <div className='flex items-center gap-3'>
        {currentTier > 0 && (
          <img src={currentIconURL} alt='Current Rank' className='w-8 h-8 object-contain' />
        )}

        <div className='relative w-80 bg-transparent border-1 border-black rounded-lg h-10 overflow-hidden flex items-center justify-center'>
          <div className='absolute left-0 top-0 h-full bg-emerald-400 transition-all duration-500' 
          style={{width: `${rr}%`}}/>
          <span className='relative z-10 text-xs font-bold text-white'>{rr}/100 RR</span> 
        </div>

        {currentTier > 0 && (
          <img src={nextIconURL} alt='Next Rank' className='w-8 h-8  object-contain' />
        )}
      </div>
    </div>
      
  )
}

export default App
