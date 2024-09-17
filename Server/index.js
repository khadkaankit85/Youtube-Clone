/* eslint-disable no-undef */
// backend.js (Node.js + Express)
import express from 'express';
import dotenv from 'dotenv';
import axios from "axios"
import cors from "cors"

// Load environment variables from the .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Use the environment variable (API key)
// eslint-disable-next-line no-undef
const apiKey = process.env.NOT_YOUTUBE_API_KEY

const allowedOrigins = ["http://localhost:5173"];
app.use(cors({
    origin: function (origin, callback) {
        // allow requests with no origin 
        // (like mobile apps or curl requests)
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
            const msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    }
}));

//route to get videos of a channel videos
app.get("/channel/videos", async (req, res) => {

    const channelID = req.query.channelID
    const options = {
        method: 'GET',
        url: 'https://yt-api.p.rapidapi.com/channel/videos',
        params: {
            id: channelID
        },
        headers: {
            'x-rapidapi-key': apiKey,
            'x-rapidapi-host': 'yt-api.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        res.send(response.data)
    } catch (error) {
        console.error(error);
        res.status(304).send("server error")
    }
})
app.get("/search", async (req, res) => {

    const searchQuery = req.query.searchQuery
    console.log(searchQuery)
    if (!searchQuery) {
        return res.send(302).send("error")
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
        res.send(response.data)
    } catch (error) {
        console.error("error handled");
        res.status(304).send("server error")
    }
})

app.get("/search", async (req, res) => {

    const searchQuery = req.query.searchQuery
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
        res.send(response.data)
    } catch (error) {
        console.error(error);
        res.status(304).send("server error")
    }
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
