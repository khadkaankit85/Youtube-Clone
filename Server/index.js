/* eslint-disable no-undef */
// backend.js (Node.js + Express)
import express from 'express';
import dotenv from 'dotenv';
import axios from "axios"

// Load environment variables from the .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Use the environment variable (API key)
// eslint-disable-next-line no-undef
const apiKey = process.env.NOT_YOUTUBE_API_KEY

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
        res.send(response)
    } catch (error) {
        console.error(error);
        res.status(304).send("server error")
    }
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
