// const express = require('express');
import express from 'express';

const app = express();

app.use((req, res) => {
    res.send("Hello Node js...!");
})

app.listen(3000, () => {
    console.log("Server is listening to PORT 3000..!");
})