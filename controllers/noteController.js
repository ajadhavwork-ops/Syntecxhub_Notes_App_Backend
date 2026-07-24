const Note = require("../models/Note");

// Create a new note
const createNote = async (req, res) => {
  try {
    // Create a new note using the request body
    const note = await Note.create(req.body);

    // Send success response
    res.status(201).json({
      message: "Note created successfully",
      note,
    });
  } catch (error) {
    // Handle errors
    res.status(500).json({
      message: error.message,
    });
  }
};

const getAllNotes = async (req, res) => {
  try {
    const allNotes = await Note.find().populate("user");

    res.status(200).json({
      message: "Note fetched successfully",
      allNotes,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}; 

const getNoteById = async(req,res) => {
    try {
        const getNote = await Note.findById(req.params.id ).populate("user");

        if(!getNote) {
          return  res.status(404).json({
                message : "note does not exist" ,
                
            });
        }
            res.status(200).json({
                message : "Note fetched successfully",
                getNote,
            });

        } catch(error) {
            res.status(500).json({
                 message : error.message,

            });
           
        }
    }
     
    const updateNote = async (req,res)=>{
        try{
            const updateNote = await Note.findByIdAndUpdate(req.params.id ,  req.body , {
                new : true 
            });
             
            if(!updateNote){
              return  res.status(404).json({
                    message : "Note does not found",
                    updateNote,
                });
            }

                res.status(200).json({
                    message : "note updated successfully",
                    updateNote,
                });

              } catch(error){
                res.status(500).json({
                    message : error.message,
                })
            }
        };

  const archiveNote = async (req, res) => {
    try {

        const archivedNote = await Note.findByIdAndUpdate(
            req.params.id,
            {
                isArchived: true
            },
            {
                new: true
            }
        );

        if (!archivedNote) {
            return res.status(404).json({
                message: "Note not found"
            });
        }

        res.status(200).json({
            message: "Note archived successfully",
            archivedNote
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};
module.exports = {
  createNote,
  getAllNotes,
  getNoteById,
  updateNote,
  archiveNote,
};
