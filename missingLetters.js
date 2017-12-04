// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.



function fearNotLetter(str) {
  var arrStr = str.split('');
  
  for (var i = 0; i < (arrStr.length - 1); i++){
    if (arrStr[(i + 1)].charCodeAt(0) - arrStr[i].charCodeAt(0) > 1){
      return String.fromCharCode((arrStr[i].charCodeAt(0) + 1));
    }
  }

  return undefined;
}