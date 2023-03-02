import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

// const connection=(username,password)=>{
//     const URL=`mongodb+srv://${username}:${password}@cluster0.lkqvzn4.mongodb.net/?retryWrites=true&w=majority`
  
//     mongoose.connect(URL,
//     {
//       useNewUrlParser: true,
      
//       useUnifiedTopology: true
//     }
//     );
// autoIncrement.initialize(connection);



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