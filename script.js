// var pencent;
// var tip;
var john = {
  bills: [124, 48, 268, 180, 42],
  fullname: 'John Smith',
  calcTips: function() {
    this.tips = [];
    this.finalValues = [];

    for (var i = 0; i < this.bills.length; i++) {
      //Determinar percentual
      var percentage;
      //var bill = this.bills[i]; //caso quiser usar direto bill nas condições

      if (this.bills[i] < 50) {
        percentage = .2;
      }else if (this.bills[i] >= 50 && this.bills[i] < 200) {
        percentage = .15;
      }else {
        percentage = .1;
      }
      //resultados nas arrays vazias
      this.tips[i] = this.bills[i] * percentage;
      this.finalValues[i] = this.bills[i] + this.bills[i] * percentage;
    }
  }
  
}
john.calcTips();
console.log(john);
  // for (var i = 0; i < bills.length; i++) {
  //   console.log(bills[i]);
  //   if(bills[i] < 50) {
  //     percent = 0.2
  //     tip = bills[i] * percent
  //     console.log('O valor da gorjeta para a conta de ' + bills[i] + ' é  de ' + tip);      
  //   }else if (bills[i] >= 50 && bills[i] < 200) {
  //     percent = 0.15
  //     tip = bills[i] * percent
  //     console.log('O valor da gorjeta para a conta de ' + bills[i] + ' é  de ' + tip);
  //   }else {
  //     percent = 0.1
  //     tip = bills[i] * percent
  //     console.log('O valor da gorjeta para a conta de ' + bills[i] + ' é  de ' + tip);
  //   };
  // }
  //console.log('Hello');
  //console.log(bills[i]);   