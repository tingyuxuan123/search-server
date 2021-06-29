const mongoose=require('mongoose')

  const subjectSchema=new mongoose.Schema({
        SubjectName:{
            type:String,
            required:true
        },
        // SubjectImg:{
        //     type:String,
        //     required:true
        // }
   })

   const subject=mongoose.model('subjects',subjectSchema)

   module.exports=subject
