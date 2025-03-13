import { Router } from "express";
import { AllCategories } from "../Controllers/categoryController.js";

const categoryRoute = Router();

categoryRoute.route("/getCategories").get(AllCategories);

export default categoryRoute;