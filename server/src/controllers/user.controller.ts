import { Request, Response } from "express";
import { userService } from "../services";
import { HTTP_STATUS_CODE } from "../constants";
import { IGetAllUserOrdersResponse } from "../types";
import { User } from "../entities";

const mappingUserOrdersResponse = (user: User): IGetAllUserOrdersResponse => {
  return {
    fullName: user.fullName,
    email: user.email,
    pk: user.pk,
    orders: user.orders,
  };
};

export const getUserOrders = async (
  req: Request,
  res: Response
): Promise<IGetAllUserOrdersResponse | void> => {
  const userPk = req.params.id;

  try {
    const existingUser = await userService.getUserById(userPk);

    if (!existingUser) {
      res.status(HTTP_STATUS_CODE.NOT_FOUND).json({ error: "User not found" });
      return;
    }

    const user = await userService.getUserOrdersByPk(userPk);

    if (!user) {
      res
        .status(HTTP_STATUS_CODE.NOT_FOUND)
        .json({ error: "Resources not found" });
      return;
    }

    const userOrderResponse: IGetAllUserOrdersResponse =
      mappingUserOrdersResponse(user);

    res.status(HTTP_STATUS_CODE.OK).json(userOrderResponse);
  } catch (error) {
    console.error("Error fetching user orders:", error);
    res
      .status(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR)
      .send("Error fetching resources");
  }
};
