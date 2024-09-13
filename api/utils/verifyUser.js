import jwt from 'jsonwebtoken';
import { errorHandler } from './error.js';

export const verifyToken=(req,res,next)=>{
      const token=req.cookies.access_token;

      if(!token){
            return next(errorHandler(401,'Unauthorized'));
      }
      //jwt tou user ka parameter deta hai as a object user property hote hai jwt me thats how we have a user property by using the jwt
      // jwt.verify se token verification hota hai aur token decode hokar user ka payload mil jaata hai(gives payload after extract the payload using the JWT_secret key) aur fir wo user ki information ka payload (err,user) wale user me chala jaata hai

      jwt.verify(token,process.env.JWT_SECRET,(err,user)=>{
            if(err){
                  return next(errorHandler(401,'Unauthorized'));
            }
            //express ki request object me user property add krde , warna express ki req object me koi user property nahi hote hai wo middleware ke dawara add hote hai
            req.user=user;
            next();
      })
}
