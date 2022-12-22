const User = require("../models/userModel")

exports.home = (req, res) =>{
    res.send("Hell home routes ")
}

exports.createUser = async(req, res) => {
    try {
        const {name, email } = req.body
        if(!name || !email){
            throw new Error("Name and Email is required")
        }

        const userExits =  await User.findOne({email});
        if(userExits){
            throw new Error("Email allready exits")
        }

        const user = await User.create({name, email})
        res.status(201).json({
            success:true,
            message:"User created successfuly",
            user,
        })

    } catch (error) {
        console.log(error)     
    }
};


exports.getUsers = async(req, res) =>{
    try {
        const users = await User.find();
        res.status(200).json({
            success: true,
            users
        });

    } catch (error) {
        console.log(error)
        res.status(401).json({
            success:false,
            message:error.message
        });
        
    }
};

exports.editUser = async (req, res) =>{
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({
            success: true,
            message: "User updated successfuly",
            user,
        });
    } catch (error) {
        console.log(error)
        res.status(401).json({
            success: false,
            message: error.message
        });
        
    }
};


exports.deleteUser = async (req, res) =>{
    try {
        const user = await User.findByIdAndDelete(req.params.id, req.body)
        res.status(200).json({
            success: true,
            message: "User deleted successfuly",
        });
        
    } catch (error) {
        console.log(error)
        res.status(401).json({
            success: false,
            message: error.message,
        });
        
    }
};