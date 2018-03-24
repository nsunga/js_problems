// Given a finite set of coin denominations, find out the total
// possible ways to construct x with the given set.

let coin_denominations = [100, 50, 25, 10, 5, 1];

const dynamic_progr = (coin_denominations, amount) => {
  let combinations = new Array(amount + 1).fill(0);
  combinations[0] = 1;

  for (let coin of coin_denominations) {
    for (let i = 1; i < amount+1; i++) {
      if (i >= coin) {
        combinations[i] += combinations[i-coin];
      }
    }
  }
  return combinations[amount];
};

console.log(dynamic_progr(coin_denominations, 100));
