import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    //mongoose ko mongouri present in config
    .connect(process.env.MONGO_URI, {
      dbName: "RESTAURANT",
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log(`Some error occured while connecing to database: ${err}`);
    });
};
