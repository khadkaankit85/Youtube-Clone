// backend.js (Node.js + Express)
import express from 'express';
import dotenv from 'dotenv';
import axios from "axios"

// Load environment variables from the .env file
dotenv.config();

const app = express();
const port = 3000;

// Use the environment variable (API key)
const baseUrl = "https://youtube-v31.p.rapidapi.com";
// eslint-disable-next-line no-undef
const apiKey = process.env.NOT_YOUTUBE_API_KEY


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
