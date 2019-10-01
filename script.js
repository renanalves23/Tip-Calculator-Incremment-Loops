var pencent;
var tip;
var bills = [124, 48, 268, 180, 42];
  for (var i = 0; i < bills.length; i++) {
    console.log(bills[i]);
    if(bills[i] < 50) {
      percent = 0.2
      tip = bills[i] * percent
      console.log('O valor da gorjeta para a conta de ' + bills[i] + ' é  de ' + tip);      
    }else if (bills[i] >= 50 && bills[i] < 200) {
      percent = 0.15
      tip = bills[i] * percent
      console.log('O valor da gorjeta para a conta de ' + bills[i] + ' é  de ' + tip);
    }else {
      percent = 0.1
      tip = bills[i] * percent
      console.log('O valor da gorjeta para a conta de ' + bills[i] + ' é  de ' + tip);
    }
  }
  //console.log('Hello');
  //console.log(bills[i]);   