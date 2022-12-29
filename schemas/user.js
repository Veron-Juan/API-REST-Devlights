const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const userSchema = new Schema({
    id: String,
    name: String,
    lastname: String,
    age: Number,
    address: String
})

const userModel = mongoose.model("users", userSchema)

module.exports = userModel;