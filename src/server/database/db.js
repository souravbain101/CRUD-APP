
import mongoose from "mongoose";




 const connection=async(username,password)=>{
    const URL=`mongodb+srv://${username}:${password}@cluster0.lkqvzn4.mongodb.net/?retryWrites=true&w=majority`
   try {
    await mongoose.connect(URL,
    {
      useNewUrlParser: true,
      
      useUnifiedTopology: true
    }
    );
    console.log("successfully conected to database");
   } catch (error) {
    console.log("eroor while connecting to database",error);
   }
    
   
}
export default connection;
