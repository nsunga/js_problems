let sequence = [];

const fib = input => {
  if (input == 1) { return 1; }
  if (input == 0) { return 0; }
  let result = fib(input - 2) + fib(input - 1);
  return result;
};

const fib_sequence = (arr, input) => {
  for (let i = 0; i < input; i++) {
    arr[i] = fib(i);
  }
}

const fib_iter = (arr, input) => {
  arr[0] = 0;
  arr[1] = 1;
  for (let i = 2; i < input; i++) {
    arr[i] = arr[i-2] + arr[i-1];
  }
}

fib_iter(sequence, 7);
console.log(sequence);
