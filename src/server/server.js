import express from 'express';
import connection from "./database/db.js";
import dotenv from "dotenv";
import Router from "./routes/route.js";
import cors from 'cors';
import bodyparser from 'body-parser';



const app=express();

app.use(bodyparser.json({extended:true}));
app.use(bodyparser.urlencoded({extended:true}));
dotenv.config();

const username=process.env.DB_USERNAME;
const password=process.env.PASSWORD;

connection(username,password);

app.use(cors());


app.use('/',Router);




app.listen(process.env.PORT ||8000, ()=>{
    console.log("Server is Running");
})