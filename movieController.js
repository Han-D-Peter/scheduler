import Schedule from "./models/schedule";
import { resolveNaptr } from "dns";

export const home = async (req, res) => {
  try {
    const schedules = await Schedule.find({}).sort({ date: -1 });
    res.render("home", { pageTitle: "Home", schedules });
  } catch (error) {
    console.log(error);
    res.render("home", { pageTitle: "Home", schedules: [] });
  }
};

export const getApplication = (req, res) => res.render("applicationCheck");

export const postApplication = async (req, res) => {
  const {
    body: {
      start_date,
      start_hour,
      start_minute,
      end_date,
      end_hour,
      end_minute,
      location,
      category,
      projectName,
      content,
      name_maker,
      user_count
    }
  } = req;
  const today = new Date();
  const date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  const idx = 1;
  const time_duration = 1;
  const time_total = time_duration;
  const rank = 1;
  const serial_text = "text";
  const newSche = await Schedule.create({
    idx,
    date,
    time_start: {
      date: start_date,
      hour: start_hour,
      minuete: start_minute
    },
    time_end: {
      date: end_date,
      hour: end_hour,
      minuete: end_minute
    },
    time_duration,
    time_total,
    location,
    rank,
    serial_text,
    projectName,
    category,
    content,
    name_maker,
    user_count
  });
  res.render("applicationCheckAfter", {
    pageTitle: "Application Check",
    start_date,
    start_hour,
    start_minute,
    end_date,
    end_hour,
    end_minute,
    location,
    category,
    projectName,
    content,
    name_maker,
    user_count
  });
};

export const scheduleDetail = async (req, res) => {
  const {
    params: { id }
  } = req;
  const contentDetail = await Schedule.findById({ _id: id });
  const dateToString = date => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    return `${year}-${month}-${day}`;
  };
  const createDate = dateToString(contentDetail.date);
  const startDate = dateToString(contentDetail.time_start.date);
  const endDate = dateToString(contentDetail.time_end.date);
  res.render("scheduleDetail", {
    pageTitle: "Schedule Detail",
    contentDetail,
    createDate,
    startDate,
    endDate
  });
};

export const getScheduleModify = async (req, res) => {
  const {
    params: { id }
  } = req;
  const contentDetail = await Schedule.findById({ _id: id });
  res.render("editSchedule", {
    pageTitle: "Modify Content",
    contentDetail
  });
  console.log(contentDetail);
};

export const postScheduleModify = async (req, res) => {
  const {
    params: { id },
    body: {
      date,
      location,
      content,
      category,
      time_start,
      time_end,
      name_maker,
      user_count
    }
  } = req;
  await Schedule.findByIdAndUpdate(id, {
    date,
    location,
    content,
    category,
    time_start,
    time_end,
    name_maker,
    user_count
  });
  const contentDetail = id;
  res.redirect(`/view/${id}`);
};

export const deleteSchedule = async (req, res) => {
  console.log(req.params);
  const {
    params: { id }
  } = req;
  await Schedule.findByIdAndRemove({ _id: id });
  res.redirect("/");
};
