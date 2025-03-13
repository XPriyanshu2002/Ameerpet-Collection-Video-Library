import e from "express";
import { json } from "express";
import cors from "cors";
import AdminRoutes from "./Routes/adminRoute.js";
import UserRoutes from "./Routes/userRoute.js";
import VideoRoutes from "./Routes/videoRoute.js";
import dotenv from "dotenv";
import { dbConnection } from "./Connections/connection.js";
import categoryRoute from "./Routes/categoryRoute.js";

dotenv.config({path:".env"});
const port = process.env.PORT || 9000;
dbConnection();

const app = e();
app.use(json());
app.use(cors());
app.use("/admin", AdminRoutes);
app.use("/user", UserRoutes);
app.use("/video", VideoRoutes);
app.use("/category", categoryRoute);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
