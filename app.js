const express = require("express");
const bodyParser = require("body-parser");

const feedRoutes = require("./routes/feed");

const app = express();

// app.use(bodyParser.urlencoded()); //This is form x-www-form-urlencoded which means it accpet data only through form submitted through form, which will not work in place of json(because it is REST API).

// So here we will use json parser!
app.use(bodyParser.json()); //application/json

// To solve CORS(Cross-Origin-Resource-Sharing) Error , we have to set multiple headers before handling any req, so that in cross origin resource can be share!
// For that we'll create middleware
app.use((req, res, next) => {
  // the first header is for origin's (i.e url's from which we can transfer and receive data from our REST API )
  res.setHeader("Access-Control-Allow-Origin", "*"); // "*" can be used as from anywhere, you can set it to specific as shown below and can pass multiple sperated by => ","(comma)
  //   res.setHeader("Access-Control-Allow-Origin", "http://localhost:8080");

  //   The second header is for method , means which methods are allowed!
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE");

  //   The third one is for Header , means which headers can be set by user!
  res.setHeader("Access-Control-Allow-Headers", "Content-Type , Authorization"); //This are some important header and some header are by default also you can set "*" here for all headers!

  next();
});

app.use("/feed", feedRoutes);

app.listen(8080);

// Go Checkout CODEPEN where we test our API and understand how to make API calls from frontend!
