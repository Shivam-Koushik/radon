const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
   
    bookName: {
        type: String,
        unique: true,
        required: true
    },
    authorName: String,
    category: {
        type: String,
        enum: ["horror", "entertainment", "love"] //"falana" will give an error
    },
    year: Number,
    // isIndian: Boolean,
    // parentsInfo: {
    //     motherName: String,
    //     fatherName: String,
    //     siblingName: String
    // },
    // cars: [ String  ]
}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema) //users



// String, Number
// Boolean, Object/json, array