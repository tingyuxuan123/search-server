const mongoose =require('mongoose')

mongoose.connect("mongodb://localhost:27017/search",{useUnifiedTopology:true,useNewUrlParser:true}).then((result) => {
    console.log("链接数据库成功");
}).catch((err) => {
    console.log("数据库链接失败",err);
});

