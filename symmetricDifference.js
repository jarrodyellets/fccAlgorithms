Create a function that takes two or more arrays and returns an array of the symmetric difference (△ or ⊕) of the provided arrays.

Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), the mathematical term "symmetric difference" of two sets is 
the set of elements which are in either of the two sets, but not in both (A △ B = C = {1, 4}). For every additional symmetric 
difference you take (say on a set D = {2, 3}), you should get the set with elements which are in either of the two the sets but 
not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}).






function sym(args) {
  var data = args.slice.call(arguments);
  
  for (var j = 0; j < data.length; j++){
    data[j] = data[j].filter(function(a, b){
      return data[j].indexOf(a) == b;
    });
  }
  
  var a = data[0];
  
  for (var i = 1; i < data.length; i++){
    a = symDif(a, data[i]);
  }
  
  
  function symDif(arr1, arr2){
    
    var flatArr = [];
    var toRemove = [];
    var runArr = [];
    var result = [];
    
    flatArr = arr1.concat(arr2);
    toRemove = flatArr.filter(function(a, b){
      return flatArr.indexOf(a) !== b;
    });
    runArr = flatArr.filter(function(val){
      return toRemove.indexOf(val) === -1;
    });
    result = result.concat(runArr);
    
    return result;
  
  }

  
  
  return a.sort();
}
