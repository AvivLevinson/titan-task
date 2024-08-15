import { DBRepositoryService } from "./dbRepository.service";
import { Order, User } from "../entities";

const repositoryService = DBRepositoryService.getInstance();

const orderRepository = repositoryService.orderRepository;

const createOrder = async (
  imageUrls: string[],
  frameColor: string,
  fullAddress: string,
  user: User
): Promise<Order> => {
  const order = orderRepository.create({
    imageUrls,
    frameColor,
    fullAddress,
    user,
  });

  return await orderRepository.save(order);
};

export const orderService = {
  createOrder,
};
