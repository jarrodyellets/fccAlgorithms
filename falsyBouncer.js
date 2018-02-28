function bouncer(arr) {
  var result = [];
  arr.forEach(function(val){
    if (val){
      result.push(val);
    }
  });
  return result;
}