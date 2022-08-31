const express=require('express');
const router=express.Router();
const {getTransactions, deleteTransactions}=require('../controllers/transactions');
const {addTransactions}=require('../controllers/transactions');

router
.route('/')
.get(getTransactions)
.post(addTransactions);

router
.route('/:id')
.delete(deleteTransactions);


module.exports=router;