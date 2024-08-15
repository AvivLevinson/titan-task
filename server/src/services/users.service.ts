import { User } from "../entities";
import { DBRepositoryService } from "./dbRepository.service";

const repositoryService = DBRepositoryService.getInstance();

const userRepository = repositoryService.userRepository;

export const getUserById = async (id: string): Promise<User | null> => {
  return await userRepository.findOneBy({ pk: Number(id) });
};

const createUser = async (fullName: string, email: string): Promise<User> => {
  const user = userRepository.create({
    fullName,
    email,
  });

  user.fullName = fullName;
  user.email = email;
  return await userRepository.save(user);
};

const getUserOrdersByPk = async (id: string): Promise<User | null> => {
  return await userRepository.findOne({
    where: { pk: Number(id) },
    relations: ["orders"],
  });
};

export const userService = {
  createUser,
  getUserOrdersByPk,
  getUserById,
};
