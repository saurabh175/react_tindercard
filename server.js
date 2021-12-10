import express, { json } from "express";
import mongoose from "mongoose";
import Data from "./dbbase.js";
import Cors from "cors";
//app Config
const app = express();
const port = process.env.PORT || 8000;
const connection_url = `mongodb+srv://saurabh:D4y7VTdn852w5S6@cluster0.kkkqr.mongodb.net/apibackend?retryWrites=true&w=majority`;

//Middleewars
app.use(express.json());
app.use(Cors());
//Db config

mongoose.connect(connection_url, {}).catch((err) => console.log(err));
mongoose.connection.once("open", () => {
    console.log("db connected");
});
//Api endpoint

app.get("/", (req, res) => {
    res.status(200).send("hello world ");
});

app.post("/tinder/card", (req, res) => {
    const dbcard = req.body;
    Data.create(dbcard, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(data);
        }
    });
});
app.get("/tinder/card", (req, res) => {
    Data.find((err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    });
});

//listen

app.listen(port, () => {
    console.log(`app is listenning on ${port}`);
});