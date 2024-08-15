import "dotenv/config";

import { z } from "zod";

const envSchema = z.object({
  POSTGRES_DB_NAME: z.string(),
  POSTGRES_USER: z.string(),
  POSTGRES_PASSWORD: z.string(),
  DB_HOST: z.string(),
  DB_PORT: z
    .string()
    .transform((val) => parseInt(val, 10))
    .refine((val) => !isNaN(val)),
  REDIS_URL_CONNECTION: z.string(),
  SERVER_PORT: z.string(),
  UNSPLASH_ACCESS_KEY: z.string(),
});

export const env = envSchema.parse(process.env);
