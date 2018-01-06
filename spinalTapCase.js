// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
  var result = str.replace( /([a-z])([A-Z])/g, "$1 $2").replace(/\s/g, "-").replace(/_/g, "-");
  
  return result.toLowerCase();
}