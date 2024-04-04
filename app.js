const express = require("express");
const bodyParser = require("body-parser");

const feedRoutes = require("./routes/feed");

const app = express();

// app.use(bodyParser.urlencoded()); //This is form x-www-form-urlencoded which means it accpet data only through form submitted through form, which will not work in place of json(because it is REST API).

// So here we will use json parser!
app.use(bodyParser.json()); //application/json

app.use("/feed", feedRoutes);

app.listen(8080);
