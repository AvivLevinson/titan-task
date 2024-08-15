import { redisClient } from "../startup/redisConnection";

const setInCache = async (
  key: string,
  data: string[],
  ttl: number = 3600
): Promise<void> => {
  await redisClient.set(key, JSON.stringify(data), {
    EX: ttl,
  });
};

export const getFromCache = async (key: string): Promise<string[] | null> => {
  const cachedData = await redisClient.get(key);
  return cachedData ? JSON.parse(cachedData) : null;
};

export const appendToCache = async (
  key: string,
  additionalData: string[]
): Promise<void> => {
  const existingData = await getFromCache(key);
  const updatedData = existingData
    ? existingData.concat(additionalData)
    : additionalData;
  await setInCache(key, updatedData);
};
