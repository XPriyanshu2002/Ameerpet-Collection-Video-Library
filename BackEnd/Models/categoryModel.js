import mongoose from "mongoose";

const categorySchema = mongoose.Schema({
    CategoryId: String,
    CategoryName: String,
});

const categoryModel = mongoose.model("tblcategories", categorySchema);

export default categoryModel;