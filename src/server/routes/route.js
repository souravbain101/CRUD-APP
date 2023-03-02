import  express ,{Router} from "express";
const router=express.Router();
import addUser from "../controler/user-controler.js";

router.post('/add',addUser)
export default router;
