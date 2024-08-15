import { Request, Response, NextFunction } from "express";
import { HTTP_STATUS_CODE } from "../constants";
import { IError } from "../types";

export const errorHandler = (
  err: IError,
  _req: Request,
  res: Response,
  _next: NextFunction
): void => {
  const status = err.status || HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR;
  const message = err.message || "Something went wrong on the server.";

  res.status(status).json({
    status,
    message,
  });

  return;
};
