import { createHash } from "node:crypto";

export const generateHashForBlock = async (previousHash: string, merkleRootHash: string, timestamp: string, nonce: string) => {
    return createHash("sha256").update(previousHash + merkleRootHash + timestamp + nonce).digest("hex");
} 