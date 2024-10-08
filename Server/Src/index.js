import { Router } from 'express';
import dotenv from 'dotenv';
import axios from "axios";


// Load environment variables from the .env file
dotenv.config();

const app = Router();
// const port = process.env.PORT || 3000;


app.get("/", (req, res) => {
    res.send("Hello world from router")
})
const apiKey = process.env.NOT_YOUTUBE_API_KEY;


// Regex patterns for validation
const videoIdRegex = /^[a-zA-Z0-9_-]{11}$/;
const channelIdRegex = /^UC[a-zA-Z0-9_-]{22}$/;

// Middleware for validating channel ID and video ID
const validateChannelId = (req, res, next) => {
    const channelID = req.query.channelID;
    if (!channelID || !channelIdRegex.test(channelID)) {
        return res.status(400).send("Invalid Channel ID");
    }
    next();
};

const validateVideoId = (req, res, next) => {
    const videoID = req.query.videoID;
    if (!videoID || !videoIdRegex.test(videoID)) {
        return res.status(400).send("Invalid Video ID");
    }
    next();
};



// Route to get videos of a channel
app.get("/channel/videos", validateChannelId, async (req, res) => {
    const channelID = req.query.channelID;

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
app.get("/video/info", validateVideoId, async (req, res) => {
    const videoID = req.query.videoID;

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
        res.send(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send("Server error");
    }
});

// Validate video ID for related videos
app.get("/video/getrelatedVideos", validateVideoId, async (req, res) => {
    const videoID = req.query.videoID;

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
        console.log("Data sent for ", videoID);
        res.send(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send("Server error");
    }
});

// Validate channel ID for channel data
app.get("/video/getChannelData", validateChannelId, async (req, res) => {
    const channelID = req.query.channelID;

    const url = `https://yt-api.p.rapidapi.com/channel/home?id=${channelID}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': apiKey,
            'x-rapidapi-host': 'yt-api.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(url, options);
        console.log("Data sent for the channel", channelID);
        res.send(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send("Server error");
    }
});

// Validate channel ID for channel videos
app.get("/video/getChannelvideos", validateChannelId, async (req, res) => {
    console.log("Request received to get channel videos");
    const channelID = req.query.channelID;

    const url = `https://yt-api.p.rapidapi.com/channel/videos?id=${channelID}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': apiKey,
            'x-rapidapi-host': 'yt-api.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(url, options);
        console.log(response.data);
        res.send(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send("Server error");
    }
});

export default app;