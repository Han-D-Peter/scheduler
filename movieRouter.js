import express from "express";
import { home, getApplication, postApplication } from "./movieController";

const movieRouter = express.Router();

movieRouter.get("/application", getApplication);
movieRouter.post("/application", postApplication);
movieRouter.get("/", home);

// Add your magic here!

export default movieRouter;
