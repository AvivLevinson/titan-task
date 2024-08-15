import { Repository } from "typeorm";
import { User, Order } from "../entities";
import { dbConfig } from "../config";

export class DBRepositoryService {
  private static instance: DBRepositoryService;
  public userRepository: Repository<User>;
  public orderRepository: Repository<Order>;

  private constructor() {
    this.userRepository = dbConfig.getRepository(User);
    this.orderRepository = dbConfig.getRepository(Order);
  }

  public static getInstance(): DBRepositoryService {
    if (!DBRepositoryService.instance) {
      DBRepositoryService.instance = new DBRepositoryService();
    }
    return DBRepositoryService.instance;
  }
}
