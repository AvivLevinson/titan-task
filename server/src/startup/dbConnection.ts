import { dbConfig } from "../config";

export const dbConnect = () => {
  dbConfig
    .initialize()
    .then(() => {
      console.log("db connection has been initialized!");
    })
    .catch((err) => {
      console.error("Error during db initialization:", err);
    });
};
