import { IOrder } from "./orders.interface";

export interface IUser {
  fullName: string;
  email: string;
  pk: number;
}

export interface IGetAllUserOrdersResponse extends IUser {
  orders: IOrder[];
}

export interface IGetAllUserOrderQueryRequest {
  counter?: number;
}
