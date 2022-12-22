
const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        require:[true, "Name is required"],
        trim:true,
        MaxLength:[25, "Name must be 25 ch Long "]
    },

    email:{
        type:String,
        require:[true, "Email is required"],
        unique:true
    }
})


module.exports = mongoose.model("User", userSchema)