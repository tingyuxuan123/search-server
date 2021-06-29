const {SingleSels} =require('../models/topics')

function addSingleSel(params){
    return SingleSels.create(params)
}

function deleteSingleSel(where){
    return SingleSels.deleteOne(where)
}

function updataSingleSel(where,params){
    return SingleSels.updateOne(where,params)
}

function findSingleSel(where){
    return SingleSels.find(where)
}


module.exports={
    addSingleSel,
    deleteSingleSel,
    updataSingleSel,
    findSingleSel
}