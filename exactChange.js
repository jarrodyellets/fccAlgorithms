// Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), 
// payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

// cid is a 2D array listing available currency.

// Return the string "Insufficient Funds" if cash-in-drawer is less than the change due. Return the string "Closed" 
// if cash-in-drawer is equal to the change due.

// Otherwise, return change in coin and bills, sorted in highest to lowest order.




function checkCashRegister(price, cash, cid) {
  var change = cash - price;
  var changeArr = [0.01, 0.05, 0.10, 0.25, 1.00, 5.00, 10.00, 20.00, 100.00];
  var result = [];
  var amount = 0.00;
  var cidAmount = 0.00;
  
  cid.forEach(function(arr){
    cidAmount += arr[1];
  });
  
  
  for (var i = 8; i >= 0; i--){
    while (change >= changeArr[i] && cid[i][1] !== 0){
      change = Number(change.toFixed(2));
      amount += changeArr[i];
      change -= changeArr[i];
      cid[i][1] -= changeArr[i];
    }
    if (amount !== 0.00){
      result.push([cid[i][0], amount]);
      cidAmount -= Number(amount.toFixed(2));
      amount = 0.00;
    }
  }
  if (change !== 0){
    return "Insufficient Funds";
  }
  else if (cidAmount === 0){
    return "Closed";
  }
  else {
    return result;
  }
}