const authMiddleWare = async (req,res,next)=>{

console.log(req.cookies);
res.status(200).json({msg:"Working"});
next();
}

module.exports = authMiddleWare;