// const express = require('express');
import express from 'express';

const app = express();

app.get("/user", (req, res) => {
    res.send({ firstName: "Mayank", lastName: "Kumar Das" })
});

app.post("/user", (req, res) => {
    res.send("Data sent to database successfully..!!")
});

app.delete("/user", (req, res) => {
    res.send("Data deleted from database successfully..!!")
});

app.listen(3000, () => {
    console.log("Server is listening to PORT 3000..!");
})