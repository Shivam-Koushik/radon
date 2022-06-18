let axios = require("axios")

let getAllmemes = async function (req, res) {
    try {
       
        var options = {
            method: "get",
            url:`https://api.imgflip.com/get_memes`

        }
        let result = await axios(options)
        res.status(200).send({ temp: result.data})
    }
    catch (err) {
        
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}




let getMemes = async function (req, res) {
    try {
        let template_id = req.query.template_id
        let text0 = req.query.text0
        let text1 = req.query.text1
        let username = req.query.username
        let password = req.query.password
        var options = {
            method: "post",
            url:`https://api.imgflip.com/caption_image?template_id=${template_id}&text0=${text0}&text1=${text1}&username=${username}&password=${password}`
        }
        let result = await axios(options)
        res.send({ data: result.data})
    }
    catch (err) {
        
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


module.exports.getMemes = getMemes
module.exports.getAllmemes = getAllmemes