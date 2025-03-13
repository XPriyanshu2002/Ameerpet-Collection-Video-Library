import mongoose from "mongoose";

const adminSchema = mongoose.Schema({
    AdminId: String,
    AdminName: String,
    Password: String,
    Email: String,
<<<<<<< HEAD
    Mobile: String
=======
    Mobile: Number
>>>>>>> 8bee3392ef3ad92adb89f6f71c3da7c152bae273
});

const adminModel = mongoose.model("tblAdmin", adminSchema);

export default adminModel;