import { Request, Response, NextFunction } from "express";
import { z, ZodError } from "zod";

import { getUserOrdersSchema } from "../schemaValidation";
import { HTTP_STATUS_CODE } from "../constants";

export const validateGetUserOrders = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const parsedParams = getUserOrdersSchema.safeParse(req.params);

  if (!parsedParams.success) {
    return res
      .status(HTTP_STATUS_CODE.BAD_REQUEST)
      .json({ errors: parsedParams.error.errors });
  }

  req.params = parsedParams.data;
  next();
};
