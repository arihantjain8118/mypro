const express = require('express');
//console.log("working");

const bodyParser = require("body-parser");
const mongoose = require('mongoose');

const postsRoutes = require("./routes/posts");

const app = express();
//console.log("hvggnvvhgytftvyv");
mongoose.connect("mongodb+srv://sudo:lUUJmtSwu9JpcKnu@cluster0-jw8bw.mongodb.net/node-angular?retryWrites=true",{ useNewUrlParser: true })
.then(() =>
{
  console.log("Connected to Database");
})
.catch(()=>{console.log("Database Connection Failed");
});
//console.log("vghg");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use((req ,res,next) =>
{
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type,Accept");
  res.setHeader("Access-Control-Allow-Methods",
  "GET,POST,PATCH,PUT,DELETE,OPTIONS");
  next();
}
);

// console.log("yaha");
app.use("/ api/posts",postsRoutes);
module.exports = app;
