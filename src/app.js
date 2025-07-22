// const express = require('express');
import express from 'express';

const app = express();

/*
app.use( (req, res) => {
    res.send("Hello Node js...!");  
    
    //==> response handler for / route , it will only handle the requests for / route , writing route for "/" handler and not writing "/" is one and the same and one more thing Using app.use() on / first can result in all other routes being ignored depending on logic — because app.use() matches everything that starts with /.
})
*/

app.use("/home", (req, res) => {
    res.send("Hello Node js home...!");  //==> response handler for /home route , it will only handle the requests for /home route
})
app.use("/about", (req, res) => {
    res.send("Hello Node js from about...!");  //==> response handler for /about route , it will only handle the requests for /about route
})

app.listen(3000, () => {
    console.log("Server is listening to PORT 3000..!");
})