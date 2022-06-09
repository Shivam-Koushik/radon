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
    let arr2 = arr1.map((item) => { UserModel.find({ author_id: item.author_id }).select({ author_name: 1, _id: 0 }) })
    res.send({ arr2 })
    console.log(arr2)
}


module.exports.createBook = createBook
module.exports.getBooksData = getBooksData
module.exports.getAuthor = getAuthor
module.exports.getAllAuthor = getAllAuthor