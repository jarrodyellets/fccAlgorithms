// Return an English translated sentence of the passed binary string.

// The binary string will be space separated.



function binaryAgent(str) {
  var biArr = str.split(" ");
  var numArr = [];

  for (var i = 0; i < biArr.length; i++){
    numArr.push(String.fromCharCode(parseInt(biArr[i], 2)));
  }
  
  
  
  return numArr.join('');
}