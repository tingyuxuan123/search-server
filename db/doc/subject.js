const subject=require('../models/subject')

function addSubject(params){
    return subject.create(params)
}

function deleteSubject(where){
    return subject.deleteOne(where)
}

function updataSubject(where,params){
    return subject.updateOne(where,params)
}

function findSubject(where){
    return subject.find(where)
}


module.exports={
    addSubject,
    deleteSubject,
    updataSubject,
    findSubject
}