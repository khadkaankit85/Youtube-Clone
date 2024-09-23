import express from 'express';
import serverless from 'serverless-http';
import router from "../../index.js";

const app = express();

app.use('/.netlify/functions/api', router);  // path must route to lambda


export default app;
export const handler = serverless(app);