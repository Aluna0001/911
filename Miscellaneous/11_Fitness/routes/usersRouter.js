import { Router } from "express";
import db from "./connection.js";

const router = Router();

router.post('/api/users', async (req, res) => {
    const {username, role} = req.body;
    const result = await db.run('INSERT INTO users (username, role) VALUES (?, ?):', [username, role]);
        (console.log(result))
    res.send({ data: "OK?"});
});

//Se Anders kode. JavaScript behøver ikke DTO
//SQL sender en række. Hvilke elementer vil du sende med
//fra den række?

export default router;