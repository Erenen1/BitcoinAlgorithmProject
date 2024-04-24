import mongoose from "mongoose";
import { Schema } from "mongoose";
import { createTransactionId, signTransactionWithPrivateKey } from "../helpers/Transaction"
import { bitcoinTransfer } from "../models/accounts"
import crypto from "crypto";

export const transactionSchema = new Schema({
    hashedTransactionId: { type: String, required: true },
    fromAddress: { type: String, required: true },
    toAddress: { type: String, required: true },
    amount: { type: Number, required: true },
    transactionSign: { type: String, required: true },
    timestamp: { type: String, required: true },
    blockIndex: { type: Number, required: true }
})


const Transaction = mongoose.model("Transactions", transactionSchema);


export const getTransactionById = (transactionId: string) => Transaction.findOne({ hashedTransactionId: transactionId })
export const getTransactionsByBlockIndex = (blockIndex: number) => Transaction.find({ blockIndex: blockIndex });
export const createTransaction = (values: Record<string, any>) => new Transaction(values).save().then((transaction) => transaction.toObject());

export const generateTransaction = async (receiverPublicAddress: string, senderPrivateKey: string, amount: number) => {
    let isSuccess: boolean = await bitcoinTransfer(receiverPublicAddress, senderPrivateKey, amount);

    if (!isSuccess) return false;

    const transactionId: string = await createTransactionId(senderPrivateKey, receiverPublicAddress, amount, Date.now().toString());
    const signature = await signTransactionWithPrivateKey(senderPrivateKey, transactionId);

    return await createTransaction({
        hashedTransactionId: transactionId,
        fromAddress: senderPrivateKey,
        toAddress: receiverPublicAddress,
        amount: amount,
        transactionSign: signature,
        timestamp: Date.now().toString(),
        blockIndex: 1
    });
}
function hash(data) {
    return crypto.createHash('sha256').update(data).digest('hex');
}

export const calculateMerkleRootHash = async (blockId: number) => {
    const transactionsObj: any = await getTransactionsByBlockIndex(blockId);
    var transactions = [];
    for (let i = 0; i < transactionsObj.length; i++) {
        transactions.push(transactionsObj[i].hashedTransactionId);
    }
    while (transactions.length > 1) {
        let tempTree = [];
        for (let i = 0; i < transactions.length; i += 2) {
            let left = transactions[i];
            let right = transactions[i + 1] || transactions[i];
            tempTree.push(hash(left + right));
        }

        transactions = tempTree;
    }
    return transactions[0];
}