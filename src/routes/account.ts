import express from "express";
const router = express.Router();
import { getBalance, deleteBitcoinAccount, createBitcoinAccount } from "../controller/account"

router.post("/createAccount", createBitcoinAccount);
router.get("/:privateKey", getBalance);

router.delete("/:privateKey", deleteBitcoinAccount);

export default router;