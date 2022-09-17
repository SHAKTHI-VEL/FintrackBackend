const express=require('express');
const dotenv=require('dotenv');
const colors=require('colors');
const morgan=require('morgan');
const connectDB=require('./config/db');


dotenv.config({path:'./config/config.env'});

connectDB();

const transactions=require('./routes/transactions')
const login=require('./routes/auth')
const app=express();
app.use(express.json());

app.use('/api/v1/transactions',transactions);

 
app.use('/api/auth',require('./routes/auth'));



const PORT=process.env.PORT || 5000;

app.listen(PORT,console.log(`Server running on port:${PORT}`.yellow.bold));
