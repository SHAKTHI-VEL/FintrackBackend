const Transaction =require('../models/Transaction')

// @desc Get all transaction
// @route GET /api/v1/transactions
// @access PUBLIC
exports.getTransactions = async (req, res, next) => {
    try {
      const transactions = await Transaction.find({user:req.user.id});
  
      return res.status(200).json(transactions)
    } catch (err) {
      return res.status(500).json({
        success: false,
        error: 'Server Error'
      });
    }
  }

// @desc Add transaction
// @route POST /api/v1/transactions
// @access PUBLIC
exports.addTransactions=async (req,res,next)=>{
   try {
    const {category,amount,type,date}=req.body;    //If adding of another field is reequired then first add it to schema
    const transaction=await Transaction.create(req.body);
    

    return res.status(201).json( transaction);
    
     

   } catch (err) {
if(err.name==='ValidationError'){
const messages=Object.values(err.errors).map(val=>val.message);
return res.status(400).json({
    sucess:false,
    error:messages
});
}
    else{
        return res.status(500).json({
        sucess:false,
        error:'Server Error'
    });
}
   
   }
}

// @desc DELETE transaction
// @route DELETE /api/v1/transactions/:id
// @access PUBLIC
exports.deleteTransactions=async (req,res,next)=>{
   try {
    const transaction=await Transaction.findById(req.params.id);
    if(!transaction){
        return res.status(400).json({
      sucess:'false',
      error:'No transaction found'
        });
    }
   await transaction.remove();
   return res.status(200).json({
sucess:'true',
data:{}
   });
}
    catch (err) {
    
   }

}