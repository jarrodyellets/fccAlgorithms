// Translate the provided string to pig latin.

// Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

// If a word begins with a vowel you just add "way" to the end.

// Input strings are guaranteed to be English words in all lowercase.






function translatePigLatin(str) {
  var arrString = str.split("");
  var vowels = ["a", "e", "i", "o", "u"];
  var first = [];
  
  if (vowels.indexOf(arrString[0]) > -1){
    arrString.push("w", "a", "y");
    return arrString.join("");
  }
  
  else {
    for (var i = 0; i <arrString.length; i++){
      if (vowels.indexOf(arrString[0]) === -1){
        first.push(arrString[0]);
        arrString.shift();
      }
      else {
        arrString.push(first.join(""), "a", "y");
        return arrString.join("");
      }
      
    }
  }
  
}