import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.get("Stat route with GET method")
})

export default router;