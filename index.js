import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/DataBase.js";
import express from "express"; 
import signUpRouters from "./routers/signUpRouters.js";
const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", signUpRouters);

export default app;



