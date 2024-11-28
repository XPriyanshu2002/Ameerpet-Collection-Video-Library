import { Router } from "express";
import { AllAdmin, OneAdmin, RegisterAdmin } from "../Controllers/adminController.js";

const AdminRoutes = Router();

AdminRoutes.route("/getAdmins").get(AllAdmin);
AdminRoutes.route("/getAdmin/:id").get(OneAdmin);
AdminRoutes.route("/registerAdmin").post(RegisterAdmin);

export default AdminRoutes;