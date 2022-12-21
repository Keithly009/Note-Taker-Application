// Exports a function of random numbers and letters to get different id for notes using the uuid 
module.exports =() => 
Math.floor((1+Math.random()) * 0x10000)
.toString(16)
.substring(1);