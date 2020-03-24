import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
/*
DONT TOUCH THIS FILE <3
WE ARE ALL SHARING THE SAME DB
PLEASE DONT TOUCH THIS FILE
*/
mongoose.connect(process.env.MONGO_ACCOUNT, {
  useNewUrlParser: true,
  useFindAndModify: false
});

const db = mongoose.connection;

const handleOpen = () => console.log("✅  Connected to DB");
const handleError = error => console.log(`❌ Error on DB Connection:${error}`);

db.once("open", handleOpen);
db.on("error", handleError);
