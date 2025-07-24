// const express = require('express');
import express from 'express';
import dotenv from 'dotenv';

dotenv.config()

const app = express();

const PORT = process.env.PORT;

app.get("/user", (req, res) => {
    res.send({ firstName: "Mayank", lastName: "Kumar Das" })
}); 

app.listen(PORT, () => {
    console.log(`Server is listening to PORT ${PORT}..!`);
})