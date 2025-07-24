# Topics

- Create a repo
- Initialise the repo
- Node_modules , package.json, package.lock.json
- Install express
- Listen to port 7777
- write request handlers for /test , /hello
- Install nodemon and update scripts inside pcakge.json
- What are dependencies
- what is the use of "-g" while npm install
- Difference between caret and tilde (^ vs ~)
- Play with routes , what if "/" route is there
- Order of the routes matters
- If you have "/" route then if you try top access "/test" or "/hello" , what are you getting on the screen
- If you add something more after the routes like "/hello/test" , "/test/hello" , "/hello/akjh" (if "/" route is not there) what will you get on the screen
- If you shifts the order of "/" after "/hello" and "/test" , or in between both what will be the affect.
- Explore Routing and use of ?, +, (), \* in the routes.
- Use of Rgeex in the routes -> /a/ , /.\*fly$/
- Reading the query params using req.params in the routes
- Reading the dynamic routes.

```javascript
app.use((req, res) => {
  res.send("Hello Node js...!");

  //==> response handler for / route , it will only handle the requests for / route , writing route for "/" handler and not writing "/" is one and the same and one more thing Using app.use() on / first can result in all other routes being ignored depending on logic — because app.use() matches everything that starts with /. ie. it will ignore all other routes logic and will only print or execute the things which is written in "/" routes for all other routes too.
});

app.use("/home", (req, res) => {
  res.send("Hello Node js home2...!");
  //==> response handler for /home route , it will only handle the requests for /home route , you cant use same route twice and if you are using it twice express will use the first one declared..
});

app.use("/home", (req, res) => {
  res.send("Hello Node js home...!");
  //==> response handler for /home route , it will only handle the requests for /home route
});

app.use("/", (req, res) => {
  res.send("Hello from the main handler..!!");
});

app.use("/about", (req, res) => {
  res.send("Hello Node js from about...!");
  //==> response handler for /about route , it will only handle the requests for /about route
});

app.get("/user", (req, res) => {
  res.send({ firstName: "Mayank", lastName: "Kumar Das" });
});

app.post("/user", (req, res) => {
  res.send("Data sent to database successfully..!!");
});

app.delete("/user", (req, res) => {
  res.send("Data deleted from database successfully..!!");
});

//Dynamic Routing
app.get("/user/:userID/:password", (req, res) => {
  console.log(req.params.userID); // ==> It will give the value of dynamic route i.e. userID
  console.log(req.params); //==> it will give the Object
  res.send({ firstName: "Mayank", lastName: "Kumar Das" });
});

app.get(/u/, (req, res) => {
  res.send({ firstName: "Mayank", lastName: "Kumar Das" });
});
//==> this means if in the path u letter is there, it will work.
```
