import express from 'express';
import dotEnv from 'dotenv';
import Router from './routes';
import cors from 'cors';
dotEnv.config();
const app = express();

app.use(express.json())
app.use(cors())

app.use('/students', Router)
app.listen(3000, () => {
  console.log(`Server is running on:${process.env.SEVER_HOST}:${process.env.SEVER_PORT}`);
})