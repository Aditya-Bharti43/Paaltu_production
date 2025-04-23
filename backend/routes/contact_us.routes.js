import { Router } from "express";

// import { contactUsController } from "../controllers/contact_us.controller.js";
import { contactUsController } from "../controllers/contact_us.controller.js";

const router = Router();

router.route("/contact").post(contactUsController)

export default router;