import express from 'express';
import serverless from 'serverless-http';
import cors from "cors";


// In api.js
console.log("API function is starting...");

// In Src/index.js
console.log("Index router is being imported...");

import router from "../Src/index.js";
console.log("Index router is being imported...");

const app = express();

// Simple health check route
app.get('/', (req, res) => {
    res.send("hello world");
});

const allowedOrigins = ["https://youtube-clone-drab-one-17.vercel.app/", "https://youtube-clone-drab-one-17.vercel.app"]; // Add your app's URL




app.use(cors({
    origin: function (origin, callback) {
        // if (!origin) {

        //     return callback(new Error(`Requests without an origin are blocked ${allowedOrigins}`), false); // Block requests without origin (e.g., Postman)
        // }
        if (allowedOrigins.indexOf(origin) === -1) {
            const msg = `The CORS policy for this site does not allow access from ${origin}.`;
            return callback(new Error(msg), false);
        }

        return callback(null, true);
    }
}));
app.use((req, res, next) => {
    if (allowedOrigins.includes(req.headers.origin)) {
        res.setHeader("Access-Control-Allow-Methods", "GET")
        res.setHeader("Access-Control-Allow-Origin", req.headers.origin)
        next()
    }

})

// Use the imported router for API routes
app.use('/.netlify/functions/api', router);  // path must route to lambda

export default app;
export const handler = serverless(app);
