import express from "express";
const router = express.Router();
import { sendBitcoin, getTransaction } from "../controller/transaction"

router.get("/:transactionId", getTransaction);
router.post("/", sendBitcoin);



export default router;