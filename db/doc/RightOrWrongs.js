const {RightOrWrongs} =require('../models/topics')

function addRightOrWrong(params){
    return RightOrWrongs.create(params)
}

function deleteRightOrWrong(where){
    return RightOrWrongs.deleteOne(where)
}

function updataRightOrWrong(where,params){
    return RightOrWrongs.updateOne(where,params)
}

function findRightOrWrong(where){
    return RightOrWrongs.find(where)
}


module.exports={
    addRightOrWrong,
    deleteRightOrWrong,
    updataRightOrWrong,
    findRightOrWrong
}