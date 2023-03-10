import  express  from "express";
const router=express.Router();
import {addUser,getUsers,loaduser,edituser,deleteuser }from "../controler/user-controler.js";

router.post('/add',addUser);
router.get('/all',getUsers);
router.get('/:id',loaduser);
router.put('/:id',edituser);
router.delete('/:id',deleteuser);
export default router;
