const express = require("express");
const router = express.Router();

const {
  createNote,
  getAllNotes,
  getNoteById,
  updateNote,
  archiveNote, 
} = require("../controllers/noteController");
// const {
//     createNote,
//     getAllNotes,
//     getNoteById,
// } = require("../controllers/noteController");

router.post("/", createNote);
router.get("/", getAllNotes);
router.get("/:id", getNoteById);
router.put("/:id", updateNote);
router.patch("/:id/archive", archiveNote);

module.exports = router;
