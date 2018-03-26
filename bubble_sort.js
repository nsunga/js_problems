// O(n^2)

const bubble_sort = (arr) => {
  let sorted = false;
  let last_unsorted = arr.length - 1;
  while(!sorted) {
    sorted = true;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i + 1];
        arr[i+1] = arr[i];
        arr[i] = temp;
        sorted = false;
      }
    }
    last_unsorted--;
  }
};

let arr = [9, 8, 7, 1, 4, 5, 2, 3, 1, 0];
console.log(arr);
bubble_sort(arr);
console.log(arr);
