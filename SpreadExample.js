let userInputArray = process.argv.slice(2);
var min =Math.min(...userInputArray);
console.log('The minimum of [' + userInputArray + '] is ' + min);