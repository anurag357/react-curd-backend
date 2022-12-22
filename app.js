require("dotenv").config();
const express = require("express")
const connetToDB = require("./config/db");
const { getUsers } = require("./controllers/userControllers");
const userRouter = require("./routes/userRoutes")
const app = express()

//MIDDELEWARE
app.use(express.json());
app.use(express.urlencoded({extended:true}));

connetToDB();

app.use("/", userRouter)

//app.post("/createUser", userRouter)
//app.get("/getUsers", getUsers)


module.exports = app