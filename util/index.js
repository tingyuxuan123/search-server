function findEpx(where,num){
    let arr=[]
    for(let i=0;i<where.length-num+1;i++){
        arr.push(where.slice(i,num+i))
    }


   return new RegExp(arr.join('|'),'g')

}

module.exports={findEpx}