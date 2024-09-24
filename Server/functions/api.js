import express from 'express';
import serverless from 'serverless-http';

//for the stupid netlify functions
import { Router } from 'express';
import dotenv from 'dotenv';
import axios from "axios";
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

// Use the imported router for API routes
app.use('/.netlify/functions/api', router);  // path must route to lambda

export default app;
export const handler = serverless(app);
