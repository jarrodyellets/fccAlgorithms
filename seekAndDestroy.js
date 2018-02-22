// You will be provided with an initial array (the first argument in the destroyer function), 
// followed by one or more arguments. Remove all elements from the initial array that are of 
// the same value as these arguments.



function destroyer(arr) {
  var seekers = [].slice.call(arguments).slice(1);
  var result = arr.filter(function(val){
    return seekers.indexOf(val) == -1;
  });
  
  return result;
}