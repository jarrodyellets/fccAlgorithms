// Find the smallest common multiple of the provided parameters that can be evenly divided by both, 
// as well as by all sequential numbers in the range between these parameters.

// The range will be an array of two numbers that will not necessarily be in numerical order.

// e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible 
// by all numbers between 1 and 3.

function smallestCommons(arr) {
  arr.sort(function(a,b){return b-a;});
  var numArr = [];
  var gcd = function(a, b){
    if (!b){
      return a;
    }
    return gcd(b, a % b);
  };
  var lcm = function(a, b){
    return (a * b)/(gcd(a, b));
           };

  
  for (var i = arr[0]; i >= arr[1]; i--){
    numArr.push(i);
  }
  
  var result = numArr[0];
  
  numArr.forEach(function(num){
    result = lcm(result, num);
  });
  
  
  
  return result;
}