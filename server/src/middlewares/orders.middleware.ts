import { Request, Response, NextFunction } from "express";
import { createOrderSchema } from "../schemaValidation";
import { HTTP_STATUS_CODE } from "../constants";

export const validateCreateOrder = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const parsedData = createOrderSchema.safeParse(req.body);

  if (!parsedData.success) {
    return res
      .status(HTTP_STATUS_CODE.BAD_REQUEST)
      .json({ errors: parsedData.error.errors });
  }

  next();
};
