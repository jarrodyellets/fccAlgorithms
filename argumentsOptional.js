// Create a function that sums two arguments together. If only one argument is provided, 
// then return a function that expects one argument and returns the sum.

// For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

// Calling this returned function with a single argument will then return the sum:

// var sumTwoAnd = addTogether(2);

// sumTwoAnd(3) returns 5.

// If either argument isn't a valid number, return undefined.


function addTogether() {
  var arr = [].slice.call(arguments);
  
  for (var i = 0; i < arr.length; i++){
    if (typeof arr[i] !== 'number'){
      return undefined;
    }
  }
  
  if(arr.length === 2){
    return arr[0]+ arr[1];
  }

  if(arr.length !== 2){
    var sum = function(val2){
      return addTogether(arr[0], val2);
    };
    return sum;
  }
}