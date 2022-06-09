const UserModel= require("../models/userModel")
const BookModel= require("../models/bookModel")

const createUser= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}
const getChetanBhagat= async function (req, res) {
    let body = req.body
    let UserId = await UserModel.find({author_name:"Chetan Bhagat"}).select("author_id")
    console.log(UserId);
    let list = await BookModel.find({author_id:UserId[0].author_id})
    res.send({msg:list})
}

module.exports.createUser= createUser
module.exports.getUsersData= getUsersData
module.exports.getChetanBhagat= getChetanBhagat