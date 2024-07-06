import jwt from "jsonwebtoken";

export const shouldBeLoggedIn = async (req,res) =>{
  console.log(req.userId) //here we are  getting the id from verifyToken.js where req.userid =payloadid after verifying token

  res.status(200).json({message: "You are Authenticated"})
}

export const shouldBeAdmin = async (req,res) =>{
    const token = req.cookies.token

    if(!token) return res.status(401).json({message:"Not Authenticated"})
  
  
    jwt.verify(token, process.env.JWT_SECRET_KEY, async (err,payload)=>{
      if(err) return res.status(403).json({message:"token is not valid"});
      if(!payload.isAdmin){
        return res.status(403).json({message:"Not Authorised"})
      }
    })
  
    res.status(200).json({message: "You are Authenticated"})
}

/* for every action that is make new post update profile we will net the token authentication
so instead of writing this again again we can use espress js middleware*/
