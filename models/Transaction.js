const mongoose=require('mongoose');

const TransactionSchema=new mongoose.Schema({
    category:{
     type:String,
     trim:true,
     required:[true,'Please select some category']
    },
    amount:{
        type:Number,
        required:[true,'Please add amount']
    },
    note:{
        type:String,
        trim:true,
       
       },
    createdAt:{
        type:Date,
        default:Date.now
    }
});

module.exports=mongoose.model('Transaction',TransactionSchema);