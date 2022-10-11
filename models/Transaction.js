const mongoose=require('mongoose');

const TransactionSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    type:{
        type:String,
        required:[true,'Please add Expense or Income']
    },
    category:{
     type:String,
     trim:true,
     required:[true,'Please select some category']
    },
    amount:{
        type:Number,
        required:[true,'Please add amount']
    },
    
    date:{
        type:Date,
        
    }
});

module.exports=mongoose.model('Transaction',TransactionSchema);