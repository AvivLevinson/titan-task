import { z } from "zod";

export const getUserOrdersSchema = z.object({
  id: z.string().regex(/^\d+$/, "User ID must be a number"),
});
