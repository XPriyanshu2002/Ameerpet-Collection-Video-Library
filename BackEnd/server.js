import e from "express";
import { json } from "express";
import cors from "cors";
import AdminRoutes from "./Routes/adminRoute.js";
import UserRoutes from "./Routes/userRoute.js";
import VideoRoutes from "./Routes/videoRoute.js";
import dotenv from "dotenv";
<<<<<<< HEAD
import { dbConnection } from "./Connections/connection.js";

dotenv.config({path:".env"});
const port = process.env.PORT || 5003;
dbConnection();
=======

dotenv.config({path:".env"});
const port = process.env.Port || 3030;
>>>>>>> 8bee3392ef3ad92adb89f6f71c3da7c152bae273

const app = e();
app.use(json());
app.use(cors());
app.use("/admin", AdminRoutes);
app.use("/user", UserRoutes);
app.use("/video", VideoRoutes);
<<<<<<< HEAD
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
=======
app.listen(port);
console.log(`server started at port ${port}`);
>>>>>>> 8bee3392ef3ad92adb89f6f71c3da7c152bae273
