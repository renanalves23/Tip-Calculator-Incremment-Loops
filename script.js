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

var mike = {
  bills: [77, 475, 110, 45],
  fullname: 'Mike Jenkins',
  calcTips: function() {
    this.tips = [];
    this.finalValues = [];

    for (var i = 0; i < this.bills.length; i++) {
      //Determinar percentual
      var percentage;
      //var bill = this.bills[i]; //caso quiser usar direto bill nas condições

      if (this.bills[i] < 100) {
        percentage = .2;
      }else if (this.bills[i] >= 100 && this.bills[i] < 300) {
        percentage = .1;
      }else {
        percentage = .25;
      }
      //resultados nas arrays vazias
      this.tips[i] = this.bills[i] * percentage;
      this.finalValues[i] = this.bills[i] + this.bills[i] * percentage;
    }
  }
}

john.calcTips();
mike.calcTips();
console.log(john, mike);