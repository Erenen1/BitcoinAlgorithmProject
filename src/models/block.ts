import mongoose from "mongoose";
import { Schema } from "mongoose";

const blockSchema = new Schema({
    index: { type: Number, required: true },
    hash: { type: String, required: true },
    previousHash: { type: String, required: true },
    merkleRootHash: { type: String, required: true },
    timestamp: { type: String, default: Date.now().toString() },
    nonce: { type: Number },
    difficult: { type: Number },
    transactions: { type: Schema.Types.ObjectId, ref: "Transactions" },
})

const Block = mongoose.model("Blocks", blockSchema);


export const getAllBlocks = () => Block.find();
export const getBlockByIndex = (blockIndex: string) => Block.findOne({ blockIndex: blockIndex })
export const createBlock = (values: Record<string, any>) => new Block(values).save().then((Block) => Block.toObject());
