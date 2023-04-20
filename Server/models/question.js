 const mongoose =require("mongoose");
 const QuestionSchema= new mongoose.Schema({
    questionNames:String,
    questionUrl:String,
    createdAt:{
        type:Date,
        default:Date.now()
    }
 })