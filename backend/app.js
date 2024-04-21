import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { dbConnection } from "./database/dbconnection.js";
import { errorMiddleware } from "./error/error.js";
import reservationRouter from "./routes/reservationRouter.js";
const app = express();
dotenv.config({ path: "./config/config.env" });
//backend-fronend connection methods
//app.use is using cors as a middleware
app.use(
  cors({
    //origin takes in the path of frontend u r connecting
    //multiple frontends hen tou , separate krskte pr hoga is tarah frontend_url se

    origin: [process.env.FRONTEND_URL],
    //post method is used because we are sending data to backend
    methods: ["POST"],
    credentials: true,
  })
);
//taking string as a json object
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//router calling
app.use("/api/v1/reservation", reservationRouter);
//calling the db connection from database->dbconnection
dbConnection();
app.use(errorMiddleware);
export default app;
