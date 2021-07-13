const router=require('koa-router')()
const {addSubject,findSubject,updataSubject,deleteSubject}=require("../db/doc/subject")
router.prefix("/subject")


router.post("/subjectAdd",async (ctx)=>{
    let params=ctx.request.body
    await addSubject(params).then((result) => {
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

router.get("/subjectFind",async (ctx)=>{
    // const {SubjectName}=ctx.query
    // console.log({SubjectName});
    await findSubject({}).then((result) => {
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

router.post('/subjectDelete',async (ctx)=>{
    const where=ctx.request.body
    await deleteSubject(where).then((result) => {
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

router.post("/subjectUpdate",async (ctx)=>{
    const {where,params}=ctx.request.body
    console.log(where,params);
    await updataSubject(where,params).then((result) => {
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