const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend working 🚀");
});

app.post("/report", (req, res) => {
  console.log(req.body);
  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log("Server started on http://localhost:5000");
});