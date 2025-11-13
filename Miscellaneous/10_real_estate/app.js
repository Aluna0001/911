import express from "express";
import session from "express-session";
import { v4 as uuidv4 } from "uuid";
import realEstatesAgentsRouter from "./routers/realEstatesAgentsRouter.js";
import 'dotenv/config';

console.log(process.env.SESSION_SECRET);

const app = express();

app.use(express.json());

//Middleware - skal være FØR routes
app.use(
  session({
    genid: function (req) {
      return uuidv4();
    },
    secret: process.env.SESSION_SECRET || "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

// Brug routeren
app.use("/realestateagents", realEstatesAgentsRouter);

const PORT = Number(process.env.PORT) || 8080;
app.listen(PORT, () => {
  console.log(`Server kører på port ${PORT}`);
});
