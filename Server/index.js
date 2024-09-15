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

async function fetchAPI(q) {
    try {

        const response = await axios.get(`${baseUrl}${q}`, {
            headers: {
                'x-rapidapi-key': apiKey,
            }
        });

        return response.data; // Assuming the API returns JSON data
    } catch (error) {
        console.error('Error fetching API:', error);
        throw error; // Handle or rethrow the error as needed
    }
}

app.get('/getData/channels', (req, res) => {

    const query = req.query

    const channelID = query?.id
    try {
        fetchAPI(`/channels?part=snippet%2Cstatistics&id=${channelID} `).then((data) => {
            console.log(data)
            res.send(data)
        })
    }
    catch {
        res.status(304).send("server error occurred")
    }

    // baseurl/channels?part=snippet%2Cstatistics&id=${channelID}  

})
app.get('/getData/search', (req, res) => {

    const query = req.query

    const channelID = query?.id
    const searchingFor = query?.q
    const relatedVideosId = query?.relatedToVideoId
    try {

        if (channelID) {

            fetchAPI(`/search?channelId=${channelID}&part=snippet%2Cid&maxResults=50`).then((data) => {
                console.log(data)
                res.send(data)
            })
                .catch((e) => {
                    console.log(e)
                    res.status(304).send("internal server error")
                })
        }
        if (searchingFor) {
            fetchAPI(`/search?q=${query}&part=snippet%2Cid&maxResults=50`)
                .then((data => {
                    res.send(data)
                }))
                .catch((e) => {
                    console.log(e)
                })

        }
        if (relatedVideosId) {
            fetchAPI(`/search?relatedToVideoId=${relatedVideosId}&part=id%2Csnippet&type=video&maxResults=50`).then((video) => {
                res.send(video)
            }).catch(() => {
                res.status(304).send("server error")
            })
        }
    }
    catch {
        res.status(304).send("server error occurred")
    }

    // baseurl/channels?part=snippet%2Cstatistics&id=${channelID}  

})
app.get('/getData/search', (req, res) => {

    const query = req.query

    const channelID = query?.id
    try {
        fetchAPI(`/search?channelId=${channelID}&part=snippet%2Cid&maxResults=50`).then((data) => {
            console.log(data)
            res.send(data)
        })
    }
    catch {
        res.status(304).send("server error occurred")
    }

    // baseurl/channels?part=snippet%2Cstatistics&id=${channelID}  

})

app.get('/getData', (req, res) => {
    console.log(req.query)


    //fetching data according to the queries here: 


    res.send(req.query)
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
