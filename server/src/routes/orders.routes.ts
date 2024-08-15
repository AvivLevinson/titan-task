import { Router } from "express";
import { createOrder } from "../controllers";
import { validateCreateOrder } from "../middlewares";
const router = Router();

router.post("/", validateCreateOrder, createOrder);

export default router;
