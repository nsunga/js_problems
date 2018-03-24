let arr = [];

const fib = (arr, input) => {
  return fib_memoize(input, arr);
};

const fib_memoize = (input, arr) => {
  if (input == 0 || input == 1) { return input; }
  if (arr[input] == undefined) { arr[input] = fib_memoize(input-1, arr) + fib_memoize(input-2, arr); }
  return arr[input]
}

console.log(fib(arr, 43));
