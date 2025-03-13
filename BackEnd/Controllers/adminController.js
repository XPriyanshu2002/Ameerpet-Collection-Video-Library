import adminModel from "../Models/adminModel.js";

export const AllAdmin = async (req,res) => {
    try {
        const allAdmin = await adminModel.find();
        res.send(allAdmin);
    } catch (error) {
        console.log(error);
    }
}

export const OneAdmin = async (req,res) => {
    try {
        const oneAdmin = await adminModel.find({AdminId:req.params.id});
        res.send(oneAdmin);
    } catch (error) {
        console.log(error);
    }
}

export const RegisterAdmin = async (req,res) => {
    try {
        const AddAdmin = await adminModel.create({
            AdminId: req.body.AdminId,
            AdminName: req.body.AdminName,
            Password: req.body.Password,
            Email: req.body.Email,
            Mobile: parseInt(req.body.Mobile)
        });
        await AddAdmin.save();
    } catch (error) {
        console.log(error);
    }
}