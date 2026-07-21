require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");

const app = express();

const userRoutes = require("./routes/userRoutes");

app.use(express.json());

app.use("/users", userRoutes);

connectDB();
app.get("/" , (req , res)=>{
    res.send("notes app backen API running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT , ()=>{
    console.log(`server is running on port ${PORT}`)
});