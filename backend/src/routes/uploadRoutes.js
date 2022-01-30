import { Router } from "express";
import { upload, uploadConfig } from "../controllers/uploadController.js";
import { protect, admin } from "../middlewares/authMiddlewares.js";

const router = Router();

router.post("/", protect, admin, uploadConfig.single("file"), upload);

export default router;