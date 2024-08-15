import { z } from "zod";

export const createOrderSchema = z.object({
  email: z.string().email(),
  imageUrls: z.array(z.string()).min(1, "At least one image URL is required"),
  frameColor: z.string(),
  fullAddress: z.string(),
  userPk: z.number(),
  fullName: z.string(),
});
