import { Router } from "express";
import { getRandomImage } from "../controllers";
const router = Router();

router.get("/", getRandomImage);

export default router;
