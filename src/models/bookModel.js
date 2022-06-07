const mongoose = require('mongoose');

const bookModel = new mongoose.Schema( {
    bookName: { type: String, require : true },
    prices: {
        indianPrice: String,
        europePrice: String
    },
    year :  {type:Number , default: 2021},
    tags: [String],
    authorName: String, 
    totalPages : Number,
    stockAvailable: Boolean
    // isPublished: Boolean,
    // sales: {type: Number, default: 10}
}, { timestamps: true });


module.exports = mongoose.model('libraryBook', bookModel) //users

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
