import "./db";
import express from "express";
import path from "path";
import bodyParser from "body-parser";
import movieRouter from "./movieRouter";
import { localsMiddleware } from "./middlewares";
import helmet from "helmet";
import dotenv from "dotenv";
import "./models/schedule";

dotenv.config();

const PORT = 4000;

const app = express();
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(localsMiddleware);
app.use("/", movieRouter);

// Codesanbox does not need PORT :)
const handleListening = () => console.log(`✅  Server Ready!`);
app.listen(PORT, handleListening);
