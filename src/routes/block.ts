import express from "express";
const router = express.Router();
import { getBlock, getBlocks } from "../controller/block"

router.get("/:blockIndex", getBlock);
router.get("/", getBlocks);

export default router;