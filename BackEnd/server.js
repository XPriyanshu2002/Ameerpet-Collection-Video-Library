import e from "express";
import { json } from "express";
import cors from "cors";
import AdminRoutes from "./Routes/adminRoute.js";
import UserRoutes from "./Routes/userRoute.js";
import VideoRoutes from "./Routes/videoRoute.js";
import dotenv from "dotenv";

dotenv.config({path:".env"});
const port = process.env.Port || 3030;

const app = e();
app.use(json());
app.use(cors());
app.use("/admin", AdminRoutes);
app.use("/user", UserRoutes);
app.use("/video", VideoRoutes);
app.listen(port);
console.log(`server started at port ${port}`);