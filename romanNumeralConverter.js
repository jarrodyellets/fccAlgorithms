
// Convert a given number to a roman numeral.


function convertToRoman(num) {
  var result = [];
  var numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var letters = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  
  for (var i = 0; i < numbers.length; i++){
    while (num >= numbers[i]){
      num -= numbers[i];
      result.push(letters[i]);
      
    }
  }
 return result.join('');
}