const router=require('koa-router')()
const {addSingleSel,deleteSingleSel,updataSingleSel,findSingleSel}=require('../db/doc/SingleSels')
const {addRightOrWrong,deleteRightOrWrong,updataRightOrWrong,findRightOrWrong} =require('../db/doc/RightOrWrongs')
const {addFilling,deleteFilling,updataFilling,findFilling} =require("../db/doc/Fillings")
const {findEpx}=require('../util/index')
router.prefix("/topics")

router.post("/selectAdd",async (ctx)=>{
    let params=ctx.request.body
    await addSingleSel(params).then((result) => {
        if(result){
            ctx.body={
                code:200,
                message:"添加成功",
            }
        }else{
            ctx.body={
                code:300,
                message:"添加是失败"
            }
        }

    }).catch((err) => {
        ctx.body={
            code:500,
            message:"添加出错"
        }
    });
})

router.get("/selectFind",async (ctx)=>{
    const {Question,SubjectName,TopicType}=ctx.query
    console.log(Question,SubjectName,TopicType);
    let exp= findEpx(Question,4)
    let where={Question:exp}
    SubjectName && (where['SubjectName']=SubjectName)
    TopicType && (where["TopicType"]=TopicType)
    console.log(where);
    await findSingleSel(where).then((result) => {
        if(result.length>0){
            ctx.body={
                code:200,
                message:`搜索成功，为你找到${result.length}条结果`,
                result
                }
            }else{
                ctx.body={
                    code:200,
                    message:"未找到符合的结果"
                }
            }
        
    }).catch((err) => {
        ctx.body={
            code:500,
            message:"搜索出错"
        }
    });
})

router.post('/selectDelete',async (ctx)=>{
    const where=ctx.request.body
    await deleteSingleSel(where).then((result) => {
        console.log(result)
        if(result.n>0){
            ctx.body={
                code:200,
                message:"删除成功"
            }
        }else{
            ctx.body={
                code:300,
                message:"删除失败"
            }
        }
    }).catch((err) => {
        ctx.body={
            code:500,
            message:"删除出错"
        }
    });
})

router.post("/selectUpdate",async (ctx)=>{
    const {where,params}=ctx.request.body
    console.log(where,params);
    await updataSingleSel(where,params).then((result) => {
       console.log(result); 
       if(result.n>0){
        ctx.body={
            code:200,
            message:"修改成功"
        }
    }else{
        ctx.body={
            code:300,
            message:"修改失败"
        }
    }
    }).catch((err) => {
        ctx.body={
            code:500,
            message:"修改出错"
        }
    });
    
})


router.post("/RightOrWrongAdd",async (ctx)=>{
    let params=ctx.request.body
    await addRightOrWrong(params).then((result) => {
        if(result){
            ctx.body={
                code:200,
                message:"添加成功",
            }
        }else{
            ctx.body={
                code:300,
                message:"添加是失败"
            }
        }

    }).catch((err) => {
        ctx.body={
            code:500,
            message:"添加出错"
        }
    });
})

router.get("/RightOrWrongFind",async (ctx)=>{
    const {Question,SubjectName,TopicType}=ctx.query
    console.log(Question,SubjectName,TopicType);
    let exp= findEpx(Question,4)
    let where={Question:exp}
    SubjectName && (where['SubjectName']=SubjectName)
    TopicType && (where["TopicType"]=TopicType)
    console.log(where);
    await findRightOrWrong(where).then((result) => {
        if(result.length>0){
            ctx.body={
                code:200,
                message:`搜索成功，为你找到${result.length}条结果`,
                result
                }
            }else{
                ctx.body={
                    code:200,
                    message:"未找到符合的结果"
                }
            }
        
    }).catch((err) => {
        ctx.body={
            code:500,
            message:"搜索出错"
        }
    });
})

router.post('/RightOrWrongDelete',async (ctx)=>{
    const where=ctx.request.body
    await deleteRightOrWrong(where).then((result) => {
        console.log(result)
        if(result.n>0){
            ctx.body={
                code:200,
                message:"删除成功"
            }
        }else{
            ctx.body={
                code:300,
                message:"删除失败"
            }
        }
    }).catch((err) => {
        ctx.body={
            code:500,
            message:"删除出错"
        }
    });
})

router.post("/RightOrWrongUpdate",async (ctx)=>{
    const {where,params}=ctx.request.body
    console.log(where,params);
    await updataRightOrWrong(where,params).then((result) => {
       console.log(result); 
       if(result.n>0){
        ctx.body={
            code:200,
            message:"修改成功"
        }
    }else{
        ctx.body={
            code:300,
            message:"修改失败"
        }
    }
    }).catch((err) => {
        ctx.body={
            code:500,
            message:"修改出错"
        }
    });
    
})


router.post("/FillingAdd",async (ctx)=>{
    let params=ctx.request.body
    await addFilling(params).then((result) => {
        if(result){
            ctx.body={
                code:200,
                message:"添加成功",
            }
        }else{
            ctx.body={
                code:300,
                message:"添加是失败"
            }
        }

    }).catch((err) => {
        ctx.body={
            code:500,
            message:"添加出错"
        }
    });
})

router.get("/FillingFind",async (ctx)=>{
    const {Question,SubjectName,TopicType}=ctx.query
    console.log(Question,SubjectName,TopicType);
    let exp= findEpx(Question,4)
    let where={Question:exp}
    SubjectName && (where['SubjectName']=SubjectName)
    TopicType && (where["TopicType"]=TopicType)
    console.log(where);
    await findFilling(where).then((result) => {
        if(result.length>0){
            ctx.body={
                code:200,
                message:`搜索成功，为你找到${result.length}条结果`,
                result
                }
            }else{
                ctx.body={
                    code:200,
                    message:"未找到符合的结果"
                }
            }
        
    }).catch((err) => {
        ctx.body={
            code:500,
            message:"搜索出错"
        }
    });
})

router.post('/FillingDelete',async (ctx)=>{
    const where=ctx.request.body
    await deleteFilling(where).then((result) => {
        console.log(result)
        if(result.n>0){
            ctx.body={
                code:200,
                message:"删除成功"
            }
        }else{
            ctx.body={
                code:300,
                message:"删除失败"
            }
        }
    }).catch((err) => {
        ctx.body={
            code:500,
            message:"删除出错"
        }
    });
})

router.post("/FillingUpdate",async (ctx)=>{
    const {where,params}=ctx.request.body
    console.log(where,params);
    await updataFilling(where,params).then((result) => {
       console.log(result); 
       if(result.n>0){
        ctx.body={
            code:200,
            message:"修改成功"
        }
    }else{
        ctx.body={
            code:300,
            message:"修改失败"
        }
    }
    }).catch((err) => {
        ctx.body={
            code:500,
            message:"修改出错"
        }
    });
    
})

module.exports=router