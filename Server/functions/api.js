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
// List of allowed origins (no trailing `/`)
const allowedOrigins = ["https://youtube-clone-one-swart.vercel.app"];

// Use the CORS middleware
app.use(cors({
    origin: function (origin, callback) {
        // Allow requests from allowed origins or block requests with no origin (like from Postman)
        if (!origin) {
            return callback(null, false); // Block requests without origin (e.g., Postman or direct server-side requests)
        }
        if (allowedOrigins.includes(origin)) {
            return callback(null, true); // Allow the origin
        } else {
            const msg = `The CORS policy for this site does not allow access from ${origin}.`;
            return callback(new Error(msg), false); // Block the request
        }
    },
    methods: ["GET"], // Specify allowed methods
    optionsSuccessStatus: 200, // Compatibility for older browsers
}));

// Use the imported router for API routes
app.use('/.netlify/functions/api', router);  // path must route to lambda

export default app;
export const handler = serverless(app);
