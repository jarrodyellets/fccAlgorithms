// Your job is to validate or reject the US phone number based on any combination of the formats provided 
// above. The area code is required. If the country code is provided, you must confirm that the country 
// code is 1. Return true if the string is a valid US phone number; otherwise return false.

// Valid number formats:

// 555-555-5555
// (555)555-5555
// (555) 555-5555
// 555 555 5555
// 5555555555
// 1 555 555 5555


function telephoneCheck(str) {
  var test = /^([1]( |-)?)?(\([0-9]{3}\)|[0-9]{3})( |-)?([0-9]{3}( |-)?[0-9]{4}|[0-9]{7})$/;
                   
  return test.test(str);
}