// const express = require('express');
import express from 'express';
import dotenv from 'dotenv';

dotenv.config()

const app = express();

const PORT = process.env.PORT;

app.get("/user", (req, res) => {
    res.send({ firstName: "Mayank", lastName: "Kumar Das" })
});

app.post("/user", (req, res) => {
    res.send("Data sent to database successfully..!!")
});

app.delete("/user", (req, res) => {
    res.send("Data deleted from database successfully..!!")
});

app.listen(PORT, () => {
    console.log(`Server is listening to PORT ${PORT}..!`);
})