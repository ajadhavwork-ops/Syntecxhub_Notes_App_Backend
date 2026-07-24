const express = require("express");
const router = express.Router();


const {
  createUser,
  getAllUsers,
   getUserById,
   getUserNotes
} = require("../controllers/userController");

router.post("/", createUser);
router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.get("/:id/notes", getUserNotes);

module.exports = router;