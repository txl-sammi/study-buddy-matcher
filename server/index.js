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