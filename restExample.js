function average(...args) {
  var sum = 0;
  var arrayLength = args.length;
  if (arrayLength !== 0) {
    args.forEach(function addAllNumbers(value) {
      sum += value;
    });
    var result = sum / length;
    return result;
  } else {
    return 'No input arguments passed';
  }


}

module.exports = average;