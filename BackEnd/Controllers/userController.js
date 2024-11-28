import userModel from "../Models/userModel.js";

export const AllUsers = async (req,res) => {
    try {
        const allUsers = await userModel.find();
        res.send(allUsers);
    } catch (error) {
        console.log(error);
    }
}

export const OneUser = async (req,res) => {
    try {
        const oneUser = await userModel.find({UserId:req.params.id});
        res.send(oneUser);
    } catch (error) {
        console.log(error);
    }
}

export const RegisterUser = async (req,res) => {
    try {
        const AddUser = await userModel.create({
            UserId: req.body.UserId,
            UserName: req.body.UserName,
            Password: req.body.Password,
            Email: req.body.Email,
            Mobile: parseInt(req.body.Mobile)
        });
        await AddUser.save();
    } catch (error) {
        console.log(error);
    }
}