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

module.exports = {
    createNote,
};