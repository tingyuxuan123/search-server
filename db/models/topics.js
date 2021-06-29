const mongoose =require("mongoose")
 
let SingleSelSchema=new mongoose.Schema({
    Question:{
        type:String,
        required:true
    },
    ChoiseA:{
        type:String,
        required:true
    },
    ChoiseB:{
        type:String,
        required:true
    },
    ChoiseC:{
        type:String,
        required:true
    },
    ChoiseD:{
        type:String,
        required:true
    },
    TopicType:{
        type:String,
        default:"选择题",
        select:false
    },
    SubjectName:{
        type:String,
        required:true
    },
    Answer:{
        type:String,
        required:true
    },
    Show:{
        type:String,
        required:true
    },
    Time:{
        type:String,
        default:Date.now
    },
    desc:{
        type:String,
        default:""
    }
})


let RightOrWrongSchema=new mongoose.Schema({
    Question:{
        type:String,
        required:true
    },
    TopicType:{
        type:String,
        default:"判断题",
        select:false
    },
    SubjectName:{
        type:String,
        required:true
    },
    Answer:{
        type:Boolean,
        required:true
    },
    Show:{
        type:String,
        required:true
    },
    Time:{
        type:String,
        default:Date.now
    },
    desc:{
        type:String,
        default:""
    }
})

let FillingSchema=new mongoose.Schema({
    Question:{
        type:String,
        required:true
    },
    TopicType:{
        type:String,
        default:"填空题",
        select:false
    },
    SubjectName:{
        type:String,
        required:true
    },
    Answer:{
        type:String,
        required:true
    },
    Show:{
        type:String,
        required:true
    },
    Time:{
        type:String,
        default:Date.now
    },
    desc:{
        type:String,
        default:""
    }
})


let SingleSels=mongoose.model("SingleSels",SingleSelSchema)
let RightOrWrongs=mongoose.model("RightOrWrongs",RightOrWrongSchema)
let Fillings=mongoose.model("Fillings",FillingSchema)

module.exports={
    SingleSels,
    RightOrWrongs,
    Fillings
}


