import videoModel from "../Models/videoModel.js";

export const AllVideos = async (req,res) => {
    try {
        const allVideos = await videoModel.find();
        res.send(allVideos); 
    } catch (error) {
        console.log(error);
    }
}

export const OneVideoById = async (req,res) => {
    try {
        const oneVideo = await videoModel.find({VideoId: parseInt(req.params.VideoId)});
        res.send(oneVideo);
    } catch (error) {
        console.log(error);
    }
}

export const OneVideoByCategory = async (req,res) => {
    try {
        const oneVideo = await videoModel.find({CategortId: parseInt(req.params.CategoryId)});
        res.send(oneVideo);
    } catch (error) {
        console.log(error);
    }
}

export const AddVideo = async (req,res) => {
    try {
        const addVideo = await videoModel.create({
            VideoId: parseInt(req.body.VideoId),
            CategoryId: parseInt(req.body.CategoryId),
            Title: req.body.Title,
            Description: req.body.Description,
            Url: req.body.Url,
            Views: parseInt(req.body.Views),
            Likes: parseInt(req.body.Likes),
            Dislikes: parseInt(req.body.Dislikes)
        });
        await addVideo.save();
    } catch (error) {
        console.log(error);
    }
}

export const EditVideo = async (req,res) => {
    try {
        const findVideo = await videoModel.find({VideoId: parseInt(req.params.VideoId)});
        const updateVideo = await videoModel.updateOne({VideoId:findVideo},{
            VideoId: parseInt(req.body.VideoId),
            CategoryId: parseInt(req.body.CategoryId),
            Title: req.body.Title,
            Description: req.body.Description,
            Url: req.body.Url,
            Views: parseInt(req.body.Views),
            Likes: parseInt(req.body.Likes),
            Dislikes: parseInt(req.body.Dislikes)
        });
        res.send(updateVideo);

    } catch (error) {
        console.log(error);
    }
}

export const DeleteVideo = async (req,res) => {
    try {
        const deleteVideo = await videoModel.deleteOne({VideoId: parseInt(req.params.VideoId)});
        res.status(200).json({
            deleteVideo
        })
    } catch (error) {
        console.log()
    }
}