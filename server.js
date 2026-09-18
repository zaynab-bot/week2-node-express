const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.get("/user/:id", (req, res) => {
  const { id } = req.params;
  res.send(`User ${id} profile`);
});

app.post("/user", (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({
      error: "Name and email are required"
    });
  }

  res.json({
    message: `Hello, ${name}!`
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});