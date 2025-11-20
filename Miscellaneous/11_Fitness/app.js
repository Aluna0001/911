import express from "express";

const app = express();

// middleware
app.use(express.json());

const PORT = 8080;

app.listen(PORT, () => {
  console.log("Server lytter på port " + PORT);
});
