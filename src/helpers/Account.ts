import coinKey from "coinkey"

export const generatePublicKey = () => {
    let { publicKey } = new coinKey.createRandom();
    return publicKey.toString('hex');
}

export const generatePrivateKey = () => {
    let { privateKey } = new coinKey.createRandom();
    return privateKey.toString('hex')
}