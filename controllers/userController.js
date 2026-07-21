const User = require("../models/User");
const createUser = async (req,res) =>{
    try{
        const {name , email} = req.body;

        const user = await User.create({
            name,
            email,
        });

        res.status(201).json({
            message:"User created successfully",
            user,
        });
    } catch(error){
        res.status(500).json({
            message:error.message,
        });
    }
};



const getAllUsers = async (req,res) => {
    try{
        const users = await User.find();

        res.status(200).json({
            message:"Users Fetched successfully",
            users,
        });

    } catch(error){
        res.status(500).json({
            message: error.message,
        });
    }

};

module.exports = {
    createUser,
    getAllUsers
};