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

const getUserById = async(req,res) => {
    try{
        const user = await User.findById(req.params.id);

         if(!user){
    return res.status(404).json({
        message:"user not found "
    });
}
        res.status(200).json({
        message:"got the user by id ",
        user,
       });
} catch(error){
    res.status(500).json({
        message: error.message,
    });
}
};

const Note = require("../models/Note");

const getUserNotes = async (req, res) => {
    try {

        const notes = await Note.find({
            user: req.params.id
        });

        res.status(200).json({
            message: "User notes fetched successfully",
            notes
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    getUserNotes,
};