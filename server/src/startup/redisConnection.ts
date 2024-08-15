import { createClient } from "redis";
import { env } from "../config";

export const redisClient = createClient({
  url: env.REDIS_URL_CONNECTION,
});

redisClient.on("error", (err) => console.log("Redis Client Error", err));

export const redisConnection = async () => {
  try {
    await redisClient.connect();
    console.log("Redis connection has been initialized!");
  } catch (err) {
    console.error("Error during Redis initialization:", err);
  }
};
