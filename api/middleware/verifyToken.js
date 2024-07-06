import jwt from "jsonwebtoken"

export const verifyToken =(req,res,next) => {

    const token = req.cookies.token

  if(!token) return res.status(401).json({message:"Not Authenticated"})


  jwt.verify(token, process.env.JWT_SECRET_KEY, async (err,payload)=>{
    if(err) return res.status(403).json({message:"token is not valid"});
  req.userId=payload.id;

 next();
});

}

/*express js middleware allows to intercept any process and do verification and then continues with the process 
 and if everything is correct then it runs next ,next here is the process written in test.route.js in  after verifytoken it shouldbeloogedin */