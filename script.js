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

function calcAverage(tips) {
  var soma = 0;
  for (var i = 0; i < tips.length; i++) {
    soma = soma + tips[i];
  }
  return soma / tips.length; //atribuindo a respectiva média à calcAverage()
}

      //Cálculos
john.calcTips();
mike.calcTips();

john.average = calcAverage(john.tips);
mike.average = calcAverage(mike.tips);

console.log(john, mike);

if (john.average > mike.average) {
  console.log(' A maior média de gorjetas é de ' + john.fullname + ' totalizando ' + john.average);
}else if (mike.average > john.average) {
  console.log(' A maior média de gorjetas é de ' + mike.fullname + ' totalizando ' + mike.average);
}else {
  console.log('Ambos tem a mesma média, a qual é ' + john.average);
}