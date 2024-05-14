import express from "express"
import { PORT, mongoDBURL } from "./config.js"
import mongoose from "mongoose";
import { Blog } from "./models/blogModel.js";
import blogsRoute from "./routes/blogsRoute.js";
import cors from 'cors';

const app = express();

app.use(express.json());

app.use(
    cors({
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type'],
    })
);

app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send('Welcome to MERN Stack');
});

app.use('/blogs', blogsRoute);

mongoose
.connect(mongoDBURL)
.then(() => {
    console.log('App connected to database');
    app.listen(PORT, () => {
        console.log(`App is listening to port: ${PORT}`);
    });
})
.catch((error) => {
    console.log(error);
})

