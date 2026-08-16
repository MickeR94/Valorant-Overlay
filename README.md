# Valorant OBS Stream Overlay

A custom real-time stream overlay built for OBS that tracks and displays my Valorant rank progression and Rank Rating (RR) towards my 30-day Gold challenge.

---

## About the Project

I am new to both streaming on Twitch and playing Valorant. To push myself, I decided to do a challenge: go from an absolute beginner to reaching **Gold in 30 days**.

To give viewers a clear visual of my progress during streams, I created this dynamic progress bar overlay. It fetches my current rank tier and points, updating the progress bar as I earn or lose RR.

---

## Features

- **Live Rank & RR:** Displays current rank badge, tier name, and current RR (e.g. 75/100).
- **Dynamic Progress Bar:** Visual bar reflecting progress towards the next tier.
- **OBS Ready:** Transparent background designed to be embedded directly as a Browser Source in OBS Studio.
- **Secure Architecture:** Backend proxy keeps the HenrikDev API key protected from the client side.

---

## Tech Stack

- **Frontend:** React (Vite), Tailwind CSS
- **Backend:** Node.js, Express, dotenv
- **APIs:** [HenrikDev Valorant API](https://docs.henrikdev.xyz/) & [Valorant-API](https://valorant-api.com/)

---

## Getting Started

### Prerequisites
- Node.js installed
- A HenrikDev API key

### 1. Backend Setup
bash
cd valorant-overlay-backend
npm install

Create a .env file in valorant-overlay-backend/:
PORT=5000
VALORANT_API_KEY=your_api_key_here

Start the server:
node server.js

### 2. Frontend Setup
cd valorant-overlay-frontend
npm install
npm run dev -- --host

3. Add to OBS
Add a Browser Source in OBS.
Set URL to http://x.x.x.x:5173/ (The IP is whatever you see in the terminal of your IDE after running npm run dev -- --host).
Set width/height (e.g. 500x150) and leave default transparent body CSS.

## What I learnt from this project
This project was a great hands-on exercise in

* Building fullstack communication with Express and React.

* Consuming third-party REST APIs and handling environment variables securely.

* Managing local network bindings (--host) for OBS Browser integration.
