import mongoose from 'mongoose';






const userschema=new mongoose.Schema({
    userid: String,
    name:String,
    username:String,
    email:String,
    phone:String
})
// autoIncrement.initialize(mongoose.connection);
// userschema.plugin(autoIncrement.plugin,'user');



const user=mongoose.model('user',userschema);





export default user;