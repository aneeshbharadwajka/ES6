function repeatExclamation(inputString ,inputStringLength = `${inputString.length}`) {
  var resultString = `${inputString}${'!'.repeat(inputStringLength)}`;
  return resultString;
}

module.exports = repeatExclamation;