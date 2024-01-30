  const mongoose= require('mongoose');
  mongoose.connect("mongodb+srv://shubhank1011:GrzadIeShobaS5Eu@cluster0.zaswg.mongodb.net/?retryWrites=true&w=majority").then(console.log("connected"));

  const shortUrlschema= new mongoose.Schema({
    full :{type:String, required: true},

    short: {type:String, required:true},
    clicks:{
        type:Number,
        required:true,
        default:0
    }

  })
  module.exports=mongoose.model('UrlShort',shortUrlschema);
//  GrzadIeShobaS5Eu