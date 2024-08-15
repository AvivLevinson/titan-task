import { Request, Response } from "express";
import { orderService, userService } from "../services";
import { HTTP_STATUS_CODE } from "../constants";
import { IOrderResponse } from "../types";
import { Order, User } from "../entities";

const mappingOrderResponse = (user: User, order: Order): IOrderResponse => {
  return {
    user: {
      fullName: user.fullName,
      email: user.email,
      pk: user.pk,
    },
    order: {
      pk: order.pk,
      imageUrls: order.imageUrls,
      frameColor: order.frameColor,
      fullAddress: order.fullAddress,
    },
  };
};

export const createOrder = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { email, imageUrls, frameColor, fullAddress, fullName, userPk } =
    req.body;
  try {
    let user = await userService.getUserById(userPk);

    if (!user) {
      user = await userService.createUser(fullName, email);
    }

    const order = await orderService.createOrder(
      imageUrls,
      frameColor,
      fullAddress,
      user
    );

    const orderResponse: IOrderResponse = mappingOrderResponse(user, order);

    res.status(HTTP_STATUS_CODE.CREATED).json(orderResponse);
  } catch (error) {
    console.error("Error creating order:", error);
    res
      .status(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR)
      .send("Error creating resources");
  }
};
