const input = require('sync-input');
  let tbubblegum = 202 ;
  let ttoffee = 118 ;
  let ticeCream = 2250 ;
  let tmilkChoco = 1680 ;
  let tdoughnut = 1075 ;
  let tpancake = 80 ;
  let totalIncome = tbubblegum + ttoffee + ticeCream 
    +tmilkChoco +tdoughnut +tpancake; 

console.log("Earned amount:");
console.log("Bubblegum: $" + tbubblegum);
console.log("Toffee: $" + ttoffee);
console.log("Ice cream: $" + ticeCream);
console.log("Milk chocolate: $" + tmilkChoco);
console.log("Doughnut: $" + tdoughnut);
console.log("Pancake: $" + tpancake);
console.log("\n");
console.log("Income: $" + totalIncome +".0");
console.log("\n");

  let staffExpense = Number(input("Staff expenses:"));
  let otherExpense = Number(input("Other expenses:"));
  let income = totalIncome - (staffExpense + otherExpense);
console.log("Net income: $" + income);