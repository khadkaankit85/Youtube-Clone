/* eslint-disable no-undef */
// backend.js (Node.js + Express)
import express from 'express';
import dotenv from 'dotenv';
import axios from "axios";
import cors from "cors";

// Load environment variables from the .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Use the environment variable (API key)
const apiKey = process.env.NOT_YOUTUBE_API_KEY;

const allowedOrigins = ["http://localhost:5173"];
app.use(cors({
    origin: function (origin, callback) {
        // allow requests with no origin 
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
            const msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    }
}));

// Route to get videos of a channel
app.get("/channel/videos", async (req, res) => {
    const channelID = req.query.channelID;
    if (!channelID) {
        return res.status(400).send("Channel ID is required");
    }

    const options = {
        method: 'GET',
        url: 'https://yt-api.p.rapidapi.com/channel/videos',
        params: { id: channelID },
        headers: {
            'x-rapidapi-key': apiKey,
            'x-rapidapi-host': 'yt-api.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        res.send(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send("Server error");
    }
});

// Route to search videos by query
app.get("/search", async (req, res) => {
    const searchQuery = req.query.searchQuery;
    if (!searchQuery) {
        return res.status(400).send("Search query is required");
    }

    const options = {
        method: 'GET',
        url: 'https://yt-api.p.rapidapi.com/search',
        params: { query: searchQuery },
        headers: {
            'x-rapidapi-key': apiKey,
            'x-rapidapi-host': 'yt-api.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        res.send(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send("Server error");
    }
});

// Route to get video info by video ID
app.get("/video/info", async (req, res) => {
    const videoID = req.query.videoID;
    if (!videoID) {
        return res.status(400).send("Video ID is required");
    }

    const url = `https://yt-api.p.rapidapi.com/video/info?id=${videoID}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': apiKey,
            'x-rapidapi-host': 'yt-api.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(url, options);
        console.log(response.data)
        res.send(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send("Server error");
    }
});

app.get("/video/getrelatedVideos", async (req, res) => {
    const videoID = req.query.videoID;
    if (!videoID) {
        return res.status(400).send("Video ID is required");
    }

    const url = `https://yt-api.p.rapidapi.com/related?id=${videoID}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': apiKey,
            'x-rapidapi-host': 'yt-api.p.rapidapi.com'
        }
    };


    try {
        const response = await axios.request(url, options);
        console.log(response.data)
        res.send(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send("Server error");
    }
});



// Start the server
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
