import express from "express";
import mongoose from "mongoose";
import postRouts from './routes/post.routes.js'
import cors from 'cors';

const app = express()
const PORT = process.env.PORT || 5000;

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use('/api/post', postRouts);

const dbUrl = 'mongodb+srv://mongoDB:Slava1991!@cluster0.nicuu.mongodb.net/?retryWrites=true&w=majority'


async function start() {
    try {
        await mongoose.connect(dbUrl)
        app.listen(PORT, ()=> {
            console.log('Listening on Port', PORT)
        })
    }catch (e) {
        console.log(e)
    }
}

start()