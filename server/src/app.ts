import express from "express";
import { errorHandler } from "./middlewares";
import { dbConnect, initRoutes, redisConnection } from "./startup";
import { env } from "./config";

const app = express();
const PORT = env.SERVER_PORT;

dbConnect();
redisConnection();

initRoutes(app);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
