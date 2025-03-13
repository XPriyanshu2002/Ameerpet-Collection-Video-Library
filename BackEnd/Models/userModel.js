import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    UserId: String,
    UserName: String,
    Password: String,
    Email: String,
    Mobile: Number
});

const userModel = mongoose.model("tblUsers", userSchema);

export default userModel;