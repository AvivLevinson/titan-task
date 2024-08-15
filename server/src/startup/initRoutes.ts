import express, { Router, Application } from "express";
import orderRoutes from "../routes/orders.routes";
import usersRoutes from "../routes/users.routes";
import imageRoutes from "../routes/image.routes";

export const initRoutes = (app: Application) => {
  const apiRouter = Router();
  apiRouter.use(express.json());

  apiRouter.use("/orders", orderRoutes);
  apiRouter.use("/users", usersRoutes);
  apiRouter.use("/random-image", imageRoutes);

  app.use("/api", apiRouter);
};
