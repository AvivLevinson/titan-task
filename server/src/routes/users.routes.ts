import { Router } from "express";
import { getUserOrders } from "../controllers";

const router = Router();

router.get("/:id/orders", getUserOrders);

export default router;
