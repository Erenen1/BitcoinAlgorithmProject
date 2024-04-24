import express from "express";
import {  generateHashForBlock } from "../helpers/Block";

import { getAllBlocks, getBlockByIndex, createBlock } from "../models/block";

export const getBlocks = async (req: express.Request, res: express.Response) => {
    try {
        const blocks = await getAllBlocks();
        res.status(200).json(blocks)
    } catch (error) {
        console.log(error)
        res.status(500).json();
    }
}

export const getBlock = async (req: express.Request, res: express.Response) => {
    const blockIndex = req.params.blockIndex;
    try {
        const [block,]: any = await getBlockByIndex(blockIndex);

        res.status(200).json(block);
    } catch (error) {
        console.log(error)
        res.status(500).json();
    }
}

