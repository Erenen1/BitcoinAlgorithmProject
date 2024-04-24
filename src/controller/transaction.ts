import express from "express";
import { generateTransaction, getTransactionById } from "../models/transaction";


export const getTransaction = async (req: express.Request, res: express.Response) => {
    const transactionId = req.params.transactionId;
    try {
        const transaction = await getTransactionById(transactionId);
        res.status(200).json(transaction);
    } catch (error) {
        console.log(error)
        res.status(500).json();
    }
}

export const sendBitcoin = async (req: express.Request, res: express.Response) => {
    const { receiverPublicAddress, senderPrivateKey, amount } = req.body;
    try {
        const transactionOrFalse: any = await generateTransaction(receiverPublicAddress, senderPrivateKey, amount);
        if (transactionOrFalse == false) return res.status(500).json("yetersiz bakiye");


        res.status(200).json(transactionOrFalse);
    } catch (error) {
        console.log(error)
        res.status(500).json();
    }
}
