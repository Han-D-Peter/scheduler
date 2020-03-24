import express from "express";
import { home, application } from "./movieController";

const movieRouter = express.Router();

movieRouter.post("/application", application);
movieRouter.get("/", home);
// Add your magic here!

export default movieRouter;
