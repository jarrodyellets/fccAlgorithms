function mutation(arr) {
  var testArr = arr[1].split('');
  for (i = 0; i < testArr.length; i++){
    if (arr[0].toLowerCase().indexOf(testArr[i].toLowerCase()) === -1){
      return false;
    }
  }
  return true;
}