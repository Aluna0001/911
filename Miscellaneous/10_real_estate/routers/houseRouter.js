import { Router } from "express";

const router = Router();

// GET endpoint
router.get("/", (req, res) => {
  res.send({
    data: req.session.housingMarket || [],
    message: "Henter alle huse",
  });
});

// POST endpoint med session
router.post("/", (req, res) => {
  req.session.housingMarket = req.session.housingMarket || [];
  req.session.housingMarket.push(req.body);

  res.send({
    data: req.session.housingMarket,
  });
});

export default router;
