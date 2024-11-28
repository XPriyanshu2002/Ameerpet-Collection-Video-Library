import mongoose from "mongoose";

const adminSchema = mongoose.Schema({
    AdminId: String,
    AdminName: String,
    Password: String,
    Email: String,
    Mobile: Number
});

const adminModel = mongoose.model("tblAdmin", adminSchema);

export default adminModel;