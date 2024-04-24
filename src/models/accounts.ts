import mongoose from "mongoose";
import { Schema } from "mongoose";

const accountSchema = new Schema({
    privateKey: { type: String, required: true },
    publicKey: { type: String, required: true },
    balance: { type: Number, default: 0 },
    transactionHistory: { type: Schema.Types.ObjectId, ref: "Transactions" },
    timestamp: { type: String, default: Date.now().toString() }
})


export const Account = mongoose.model("Accounts", accountSchema);

export const getAccounts = () => Account.find();
export const getAccountByPrivateKey = (privateKey: string) => Account.find({ privateKey: privateKey });
export const getAccountByPublicKey = (publicKey: string) => Account.find({ publicKey: publicKey });
export const createAccount = (values: Record<string, any>) => new Account(values).save().then((account) => account.toObject());
export const deleteAccountByPrivateKey = async(privateKey: string) => {
    const account:any = await Account.findOne({ privateKey: privateKey })
    const deletedAccount = await Account.findByIdAndDelete(account._id);
    return deletedAccount.toObject();
}

export const bitcoinTransfer = async (receiverPublicAddress: string, senderPrivateKey: string, amount: number) => {
    try {
        const [sender,]: any = await getAccountByPrivateKey(senderPrivateKey);
        const [receiver,]: any = await getAccountByPublicKey(receiverPublicAddress);
        if (sender.balance < amount) return false;
        sender.balance -= amount;
        receiver.balance += amount;
        await sender.save();
        await receiver.save();
        return true
    } catch (error) {
        console.log(error)
        return false;
    }

}