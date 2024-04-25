import express from "express";
import { generatePrivateKey, generatePublicKey } from "../helpers/Account";

import { getAccounts, getAccountByPrivateKey, createAccount, deleteAccountByPrivateKey } from "../models/accounts";

export const getAllAccounts = async (req: express.Request, res: express.Response) => {
    try {
        const accounts = await getAccounts();
        res.status(200).json(accounts)
    } catch (error) {
        console.log(error)
        res.status(500).json();
    }
}

export const getBalance = async (req: express.Request, res: express.Response) => {
    const privateKey = req.params.privateKey;
    try {
        const [account,]: any = await getAccountByPrivateKey(privateKey);
        console.log(account);
        if(!account){   
            return res.status(500).json("yok");
        }
        res.status(200).json(account.balance);
    } catch (error) {
        console.log(error)
        res.status(500).json();
    }
}

export const createBitcoinAccount = async (req: express.Request, res: express.Response) => {
    const privateKey = await generatePrivateKey();
    const publicKey = await generatePublicKey();
    try {
        const account = await createAccount({ privateKey, publicKey });
        res.status(201).json(account);
    } catch (error) {
        console.log(error);
        res.status(500).json();
    }
}

export const deleteBitcoinAccount = async (req: express.Request, res: express.Response) => {
    const privateKey = req.params.privateKey;
    try {
        const deletedAccount = await deleteAccountByPrivateKey(privateKey);
        res.status(200).json(deletedAccount)
    } catch (error) {
        console.log(error);
        res.status(500).json();
    }
}