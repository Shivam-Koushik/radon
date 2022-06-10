const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

const middle1 = function(req,res,next){
    console.log("my first middleware")
    next()
}

const middle2 = function(req,res,next){
      let currentDate = new Date();
      let dateTime = currentDate.getDate()+"/"+(currentDate.getMonth()+1)+"/"+currentDate.getFullYear()+"   "+
                     currentDate.getHours()+":"+currentDate.getMinutes()+":"+currentDate.getSeconds()

      let ip = req.ip
      let url = req.originalUrl 
      
      console.log( dateTime +"   "+ip+"   "+url)
      next()
}

app.use(middle1);
app.use(middle2);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://ShivamKoushik:s%40H9663334444@cluster0.k1qkf.mongodb.net/Shivam4545-DB2?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("Hi Shivam Your MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
