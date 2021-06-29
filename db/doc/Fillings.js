const {Fillings} =require('../models/topics')

function addFilling(params){
    return Fillings.create(params)
}

function deleteFilling(where){
    return Fillings.deleteOne(where)
}

function updataFilling(where,params){
    return Fillings.updateOne(where,params)
}

function findFilling(where){
    return Fillings.find(where)
}


module.exports={
    addFilling,
    deleteFilling,
    updataFilling,
    findFilling
}