let userInputArray = process.argv.slice(2);
var userObject = {};
var xyz=[];
[, userObject.username, userObject.email,xyz] = userInputArray;
console.log(xyz);
console.log(userObject);