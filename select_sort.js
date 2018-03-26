const select_sort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let min_index = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min_index]) { min_index = j; }
    }
    let temp = arr[i];
    arr[i] = arr[min_index];
    arr[min_index] = temp;
  }
};

let arr = [9, 8, 7, 1, 4, 5, 2, 3, 1, 0];
console.log(arr);
select_sort(arr);
console.log(arr);
