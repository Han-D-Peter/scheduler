import express from "express";
import {
  home,
  getApplication,
  postApplication,
  scheduleDetail,
  deleteSchedule,
  postScheduleModify,
  getScheduleModify
} from "./movieController";

const movieRouter = express.Router();

movieRouter.get("/view/:id", scheduleDetail);

movieRouter.get("/modify/:id", getScheduleModify);
movieRouter.post("/modify/:id", postScheduleModify);

movieRouter.get("/delete/:id", deleteSchedule);

movieRouter.get("/application", getApplication);
movieRouter.post("/application", postApplication);

movieRouter.get("/", home);

// Add your magic here!

export default movieRouter;
