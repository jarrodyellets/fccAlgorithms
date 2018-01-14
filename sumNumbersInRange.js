// We'll pass you an array of two numbers. Return the sum of those two 
// numbers and all numbers between them.

// The lowest number will not always come first.

function sumAll(arr) {
  var result = 0;
  var min = arr.reduce(function(a, b){
    return Math.min(a, b);
  });
  var max = arr.reduce(function(a, b){
    return Math.max(a, b);
  });
  
  for (var i = min; i < (max + 1); i++){
    result += i;
  }
  return result;
}
