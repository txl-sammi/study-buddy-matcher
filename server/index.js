import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import flash from "express-flash";

import postRoutes from './routes/posts.js';

const app = express();
dotenv.config();

app.use('/posts', postRoutes);

// Controls the size of images
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended:true}));
app.use(cors());
app.use(flash());

app.get("/", (req, res) => {
    res.send("StudyBuddyFinder API");
});

const CONNECTION_URL="mongodb+srv://catalyst:Catalyst2023@cluster.12ldr0v.mongodb.net/?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

