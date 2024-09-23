import express from 'express';
import serverless from 'serverless-http';
import router from "../../Src/index.js";

const app = express();
app.get('/', (req, res) => {
    res.send("hello world")
});
app.use('/.netlify/functions/api', router);  // path must route to lambda


export default app;
export const handler = serverless(app);