import { Router } from "express";
import db from "./connection.js"; // korrekt sti

const router = Router();

// Async function hvis du vil logge alle exercises ved start
(async () => {
  try {
    const result = await db.all("SELECT * FROM exercise;");
    console.log(result);
  } catch (err) {
    console.error(err);
  }
})();

// GET /api/exercises/:userId
router.get("/api/exercises/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;

    // Parameteriseret query for at undgå SQL injection
    const result = await db.all("SELECT * FROM exercise WHERE user_id = ?;", [
      userId,
    ]);

    res.send({ data: result });
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: "Database error" });
  }
});

export default router;
