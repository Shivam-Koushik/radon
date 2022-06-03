const printDate = function() {
    let currentDate = new Date()
    console.log("today date is : ",currentDate.getDate())    
}

const printMonth = function() {
    let currentdate = new Date()
    let currentMonth = currentdate.getMonth()
    console.log('The current month is '+currentMonth)
}

const getBatchInfo = function() {
  let batchInformation = 'Radon, W3D4, the topic for today is Nodejs module system assignment discussion'
  console.log(batchInformation)
}

module.exports.printDate = printDate
module.exports.printMonth = printMonth
module.exports.getBatchtInfo = getBatchInfo