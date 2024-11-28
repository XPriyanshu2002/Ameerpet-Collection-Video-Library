import { Router } from "express";
import { AddVideo, AllVideos, DeleteVideo, EditVideo, OneVideoByCategory, OneVideoById } from "../Controllers/videoController.js";

const VideoRoutes = Router();

VideoRoutes.route("/getVideos").get(AllVideos);
VideoRoutes.route("/getVideo/:VideoId").get(OneVideoById);
VideoRoutes.route("/getVideos/:CategoryId").get(OneVideoByCategory);
VideoRoutes.route("/addVideo").post(AddVideo);
VideoRoutes.route("/editVideo/:VideoId").put(EditVideo);
VideoRoutes.route("/deleteVideo/:VideoId").delete(DeleteVideo);

export default VideoRoutes;