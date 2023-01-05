import { Router } from "express";
import { getFile } from "../controllers/uploadController";
import multerMiddleware from "../middleware/file";

const router = Router();

router.post("/", multerMiddleware.single("myfile"), getFile);

export default { router };
