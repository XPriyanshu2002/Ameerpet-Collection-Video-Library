import { Router } from "express";
import { AllUsers, OneUser, RegisterUser } from "../Controllers/userController.js";

const UserRoutes = Router();

UserRoutes.route("/getUsers").get(AllUsers);
UserRoutes.route("/getUser/:id").get(OneUser);
UserRoutes.route("/registerUser").post(RegisterUser);

export default UserRoutes;