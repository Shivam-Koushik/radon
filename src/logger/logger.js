const endpoint = "https://www.functionup.org"
const batch = "radon"

const log = function() {
    console.log('I am inside the log function')
}
const welcome = function() {
    console.log("Welcome to my application. I am SHIVAM KOUSHIK and a part of FunctionUp RADON cohort.")
}
const printDate = function () {
    const d = new Date();
    console.log("Today date is : " , d.getDate());
}
const printMonth = function () {
    const d = new Date();
    console.log("Today month is : " , d.getMonth());
}

const getBatchInfo = function () {
    console.log ("Roadon, W3D1, the topic for today is Nodejs module system")
}
const Trim = function () {
    const T = "     This the is trim function      "
    console.log (T.trim());
}
const toLowerCase = function () {
    const l = "this IS LOWER case"
    console.log (l.toLowerCase());
}
const toUpperCase = function () {
    const U = "this IS upper Case"
    console.log (U.toUpperCase())
}

module.exports.endpoint = endpoint
module.exports.batch = batch
module.exports.log = log
module.exports.welcome = welcome
module.exports.printDate = printDate
module.exports.printMonth = printMonth
module.exports.getBatchInfo = getBatchInfo
module.exports.Trim = Trim
module.exports.toLowerCase = toLowerCase
module.exports.toUpperCase = toUpperCase