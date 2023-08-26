import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import flash from "express-flash";

const app = express();
dotenv.config();

// Controls the size of images
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended:true}));
app.use(cors());
app.use(flash());


app.get("/", (req, res) => {
    res.send("StudyBuddyFinder API");
});

const PORT = process.env.PORT || 5000;

// Load envioronment variables
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
   }
   const mongoose = require('mongoose')
   // Connect to your mongo database using the MONGO_URL environment
   variable.
   // Locally, MONGO_URL will be loaded by dotenv from .env.
   // We've also used Heroku CLI to set MONGO_URL for our Heroku app before.
   mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'demo'
   })
   // Exit on error
   const db = mongoose.connection.on('error', err => {
    console.error(err);
    process.exit(1)
   })
   // Log to console once the database is open
   db.once('open', async () => {
    console.log(`Mongo connection started on ${db.host}:${db.port}`)
   })
   require('./author')