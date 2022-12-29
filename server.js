const express = require('express')
const mongoose = require("mongoose")
const app = express();
const bodyParser = require("body-parser")
const userRoute = require("./routes/user.js");
const rolesRoute = require("./routes/roles.js");
const tasksRoute = require("./routes/tasks.js");

const log = require("./middlewares/log")
const authentication = require("./middlewares/authentication")

app.use(log)
app.use(bodyParser.json())

// app.use(log) mostrara el middleware de forma global


app.get("/", (req, res) => {
    res.send("Hola mundo from Expres!")
})

app.use("/user", authentication, userRoute)
app.use("/roles", authentication, rolesRoute)
app.use("/tasks", authentication, tasksRoute)

mongoose.connect("mongodb://127.0.0.1:27017/clase10", (error)=> {
    if (error){
        console.log("Hubo un error en la conexion a Mongo", error)
    } else {
        console.log("Conexion exitosa con MongoDB")
    }
})

app.listen(3000)