const { count } = require("console")
const UserModel = require("../models/userModel")
const BookModel = require("../models/bookModel")

const createBook = async function (req, res) {
    let data = req.body

    let savedData = await BookModel.create(data)
    res.send({ msg: savedData })
}

const getBooksData = async function (req, res) {
    let allUsers = await BookModel.find()
    res.send({ msg: allUsers })
}
const getAuthor = async function (req, res) {
    let data = await BookModel.findOneAndUpdate({ bookName: "Two states" }, { $set: { price: 100 } })
    console.log(data.price);
    let price = data.price
    let alllist = await UserModel.find({ author_id: data.author_id }).select({ author_name: 1, _id: 0 })
    console.log(alllist[0]);
    res.send({ alllist, price })
}
const getAllAuthor = async function (req, res) {
    let arr1 = await BookModel.find({ price: { $gte: 50, $lte: 100 } })
    let arr2 = arr1.map((item)=>item.author_id)
    let arr3=[];
    for(let i=0; i<arr2.length; i++){
        let arr4 = arr2[i]
        let arr5 = await UserModel.find({ author_id:arr4}).select({ author_name: 1, _id: 0 })
        arr3.push(arr5)
}
    res.send({...arr3 })
}


module.exports.createBook = createBook
module.exports.getBooksData = getBooksData
module.exports.getAuthor = getAuthor
module.exports.getAllAuthor = getAllAuthor