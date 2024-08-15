import { IUser } from "./users.interface";

export interface IOrder {
  imageUrls: string[];
  frameColor: string;
  fullAddress: string;
  pk: number;
}

export interface ICreateOrderRequest
  extends Omit<IOrder, "pk">,
    Omit<IUser, "pk"> {}

export interface IOrderResponse {
  user: IUser;
  order: IOrder;
}
