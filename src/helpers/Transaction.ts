import crypto from "crypto"
import { ec } from "elliptic"
const ecdsa = ec;
const EC = new ecdsa('secp256k1');

export const createTransactionId = (fromAddress:string, toAddress:string, amount:number, timestamp:string) => {
    return crypto.createHash('sha256').update(fromAddress + toAddress + amount + timestamp).digest('hex');
}

export const signTransactionWithPrivateKey = (privateKey:string,hashedTransaction:string) => {
    const keyPair = EC.keyFromPrivate(privateKey);
    const signature = keyPair.sign(hashedTransaction);
    const derSign = signature.toDER('hex');

    return derSign.toString();
}







