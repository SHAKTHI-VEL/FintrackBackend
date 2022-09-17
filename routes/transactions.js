const express=require('express');
const router=express.Router();
const {getTransactions, deleteTransactions}=require('../controllers/transactions');
const {addTransactions}=require('../controllers/transactions');
const fetchuser=require('../middleware/fetchuser');

router
.route('/')
.get(fetchuser,getTransactions)
.post(fetchuser,addTransactions);

router
.route('/:id')
.delete(fetchuser,deleteTransactions);


module.exports=router;