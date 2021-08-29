//Imports
const express = require("express");
const mongoConnection = require("./utils/connection");
const dotenv = require("dotenv").config();
const cookieParser = require("cookie-parser");

//import routrs

const authRoutes = require("./routes/authroutes");

//Express App
const app = express();

//mongo link
const mdbcnt = process.env.MONGO_URI;
//mongoConnection
mongoConnection(mdbcnt, app);

//Middlewares
app.use(cookieParser());

//routes

//authRoutes
app.use("/auth", authRoutes);

//test
const data =[
  {id:1,name:'Value 1'},
  {id:2,name:'Value 2'},
  {id:3,name:'Value 3'},
  {id:4,name:'Value 4'},
  {id:5,name:'Value 5'},
  {id:6,name:'Value 6'}
]
app.get("/api", (req, res) => {
  res.cookie("test", "test");
  res.json(data);
});
 app.get('/',(req,res)=>res.json({key:'home'}))