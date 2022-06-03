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
 
 module.exports.Trim = Trim
 module.exports.toLowerCase = toLowerCase
 module.exports.toUpperCase = toUpperCase