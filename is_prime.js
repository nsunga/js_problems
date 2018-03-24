const prime = (input) => {
  for (let i = 2; i * i <= input; i++) {
    if ( (input % i) == 0) { return false; }
  }
  return true;
};

console.log(prime(3));
