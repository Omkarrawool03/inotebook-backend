const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://OmkarRawool:%40%23Rawool007@cluster0.b6wrhud.mongodb.net/'


const mongoDB = async() =>{
  await mongoose.connect(mongoURI,()=>{
  console.log("Connected Sucessfully")
});
}

mongoose.connect(mongoURI).then(()=>console.log("Connected")).catch((e)=>console.log(e.message))

module.exports = mongoDB;
