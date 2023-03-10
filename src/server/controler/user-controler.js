

import User from '../schema/user-schema.js';



export const addUser=async(req,res)=>{


 
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

export const getUsers=async(req,res)=>{
 try {
 const user=await User.find({});
 res.status(200).json(user);
 } catch (error) {
  res.status(404).json({message:error.message});
 }
}

export const loaduser=async(req,res)=>{
  try {
    const userid=req.params.id;
  const user=await User.find({userid:userid});
  res.status(200).json(user);
  } catch (error) {
   res.status(404).json({message:error.message});
  }
 }


 export const edituser=async(req,res)=>{
  const user=req.body;
  console.log(user.id);
  const editeduser=new User(user);
  
  try {
    await User.updateOne({userid:req.params.id},editeduser);
    res.status(201).json(editeduser);
  } catch (error) {
    res.status(409).json({message:error.message});
    
  }
 }


 export const deleteuser=async(req,res)=>{
  
  try {
    await User.deleteOne({userid:req.params.id});
    res.status(201).json({message:"successfull"})
  } catch (error) {
    res.status(409).json({message:error.message});
    
  }
 }
