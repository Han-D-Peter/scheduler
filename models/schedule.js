import mongoose from "mongoose";

const ScheSchema = new mongoose.Schema({
  idx: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  time_start: {
    date: { type: Date, required: true },
    hour: { type: Number, required: true },
    minuete: { type: Number, required: true }
  },
  time_end: {
    date: { type: Date, required: true },
    hour: { type: Number, required: true },
    minuete: { type: Number, required: true }
  },
  time_duration: {
    type: Number,
    required: true
  },
  time_total: {
    type: Number,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  rank: {
    type: Number,
    required: true
  },
  serial_text: {
    type: String,
    required: true
  },
  projectName: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  name_maker: {
    type: String,
    required: true
  },
  user_count: {
    type: Number,
    required: true
  }
});

const model = mongoose.model("Schedule", ScheSchema);
export default model;
