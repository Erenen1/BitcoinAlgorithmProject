import express from "express";
const app = express();
import cors from "cors";
import { connectToDatabase } from "./models/db";
import dotenv from "dotenv"
dotenv.config();


import accountRoutes from "./routes/account"
import blockRoutes from "./routes/block"
import transactionRoutes from "./routes/transaction"

console.log(process.env.DATABASE_URL)
connectToDatabase();

app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(cors());

app.use("/api/v1/accounts",accountRoutes);
app.use("/api/v1/transactions",transactionRoutes);
app.use("/api/v1/blocks",blockRoutes);



app.listen(3000, () => {
    console.log("Sunucu http://localhost:3000 üzerinde çalışıyor.")
})
