// Fill in the object constructor with the following methods below:

// getFirstName()
// getLastName()
// getFullName()
// setFirstName(first)
// setLastName(last)
// setFullName(firstAndLast)
// Run the tests to see the expected output for each method.

// The methods that take an argument must accept only one argument and it has to be a string.

// These methods must be the only available means of interacting with the object.




var Person = function(firstAndLast) {
    // Complete the method below and implement the others similarly
    var arr = firstAndLast.split(' ');
    var first = arr[0];
    var last = arr[1];
    this.getFullName = function() {
      return first + " " + last;
    };
    this.getFirstName = function(){
      return first;
    };
    this.getLastName = function(){
      return last;
    };
    this.setFullName = function(name){
      first = name.split(' ')[0];
      last = name.split(' ')[1];
    };
    this.setFirstName = function(name){
      first = name;
    };
    this.setLastName = function(name){
      last = name;
    };

};