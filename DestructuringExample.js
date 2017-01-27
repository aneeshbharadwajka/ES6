let userInputArray = process.argv.slice(2);
var userObject = {};
[, userObject.username, userObject.email] = userInputArray;

console.log(userObject);