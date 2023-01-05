import { Router } from "express";
import { deleteItem, getItem, getItems, postItem, updateItem } from "../controllers/itemController";

const router = Router();

router.get("/", getItems); // all items
router.get("/:id", getItem); // just an item
router.post("/", postItem) // add and item
router.delete("/:id", deleteItem) // delete an item
router.put("/:id", updateItem)

export default {router};
