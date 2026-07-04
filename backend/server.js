const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

app.get("/", (req, res) => {
res.json({
    success: true,
    message: "🚀 MindMesh API is running successfully!",
    version: "1.0.0",
});
});
app.use("/api/auth", require("./src/routes/auth.routes"));
app.use("/api/ideas", require("./src/routes/idea.routes"));

app.listen(5000, () => console.log("Server is running on port 5000"));
