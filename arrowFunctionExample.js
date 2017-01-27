var resultString = '';
var StringArgumentArray = process.argv.slice(2);
var result = StringArgumentArray.map((stringArgument) => {stringArgument[0]});
var finalResult = result.reduce((resultString, inputCharacter) => {resultString + inputCharacter, ''});

console.log('[' + StringArgumentArray + '] becomes ' + '\"' + finalResult + '\"');
