import mongoose from "mongoose";

const videoSchema = mongoose.Schema({
    VideoId: Number,
    CategoryId: Number,
    Title: String,
    Description: String,
    Url: String,
    Views: Number,
    Likes: Number,
    Dislikes: Number
});

const videoModel = mongoose.model("tblVideos", videoSchema);

export default videoModel;