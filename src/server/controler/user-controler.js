
import User from '../schema/user-schema.js';



const addUser=async(req,res)=>{


 
  const count=await User.count({});
  const userid={
    userid : count
   }
   

 const user=req.body;

 const obj=Object.assign({},user,userid);

 const newUser=new User(obj);
 try {
   await newUser.save();
   res.status(201).json(newUser);
   
   
  
 
 } catch (error) {
    res.status(409).json({message:error.message});
 }
 
}

export default addUser;