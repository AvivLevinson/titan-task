import "reflect-metadata";
import { DataSource } from "typeorm";
import { env } from "./env";

const PORT = process.env.DB_PORT as number | undefined;

const ENTITIES_PATH = `${__dirname}/../entities/*.{ts,js}`;

export const dbConfig = new DataSource({
  type: "postgres",
  host: env.DB_HOST,
  port: PORT,
  username: env.POSTGRES_USER,
  password: env.POSTGRES_PASSWORD,
  database: env.POSTGRES_DB_NAME,
  synchronize: true,
  entities: [ENTITIES_PATH],
});
