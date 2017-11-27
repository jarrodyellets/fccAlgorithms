// Return the number of total permutations of the provided string that don't have repeated 
// consecutive letters. Assume that all characters in the provided string are each unique.

// For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), 
// but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.



function permAlone(str) {
  var strArr = str.split('');
  var permArr = [];
  var pattern = /(.)\1+/;
  var result = 0;
  
  var swap = function(a, b){
    var temp = strArr[a];
    strArr[a] = strArr[b];
    strArr[b] = temp;
  };
 
  function generate(num){
    if (num === 1){
      permArr.push(strArr.join(''));
    }
    else {
      for (var i = 0; i != num; i++){
        generate(num - 1);
        swap(num % 2 ? 0 : i, num - 1);
      }
    }
  }
  
  generate(strArr.length);
  
  for (var j = 0; j < permArr.length; j++){
    if (pattern.test(permArr[j]) === false){
      result++;
    }
  }
  
  return result;

}
