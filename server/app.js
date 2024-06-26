import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import "express-async-errors";
import { sequelize } from "./db/database.js";
import boardsRouter from "./router/board.js";
import authRouter from "./router/auth.js";
import dotenv from "dotenv";
import { config } from "./config.js";
//import { db } from "./db/database.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan("tiny"));

app.use("/boards", boardsRouter);
app.use("/auth", authRouter);

app.use((req, res, next) => {
  res.sendStatus(404);
});

app.use((error, req, res, next) => {
  console.error(error);
  res.sendStatus(500);
});

app.listen(config.host.port);
