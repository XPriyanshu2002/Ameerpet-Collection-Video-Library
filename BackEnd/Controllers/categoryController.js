import categoryModel from "../Models/categoryModel.js";

export const AllCategories = async (req,res) => {
    try {
        const categories = await categoryModel.find();
        res.send(categories);
    } catch (error) {
        console.log("An error occured while fetching categories",error);
    }
}