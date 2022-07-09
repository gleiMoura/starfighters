import express, { json } from "express";
import chalk from "chalk";
import cors from "cors";
import "express-async-errors";
import router from "./routes/index.js";
import dotenv from "dotenv";
dotenv.config();


const app = express();

app.use(cors());
app.use(json());
app.use(router);


app.listen(process.env.PORT || 4000, () => {
    console.log(chalk.green(`API is running in port ${process.env.PORT}`));
});