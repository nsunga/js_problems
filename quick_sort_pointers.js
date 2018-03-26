const partition_array = (arr, left, right, pivot) => {
  let left_ptr = left - 1;
  let right_ptr = right;

  while (true) {
    while (arr[++left_ptr] < pivot) { ; }
    while (right_ptr > 0 && arr[--right_ptr] > pivot) { ; }

    if (left_ptr >= right_ptr) { break; }
    else {
      const temp = arr[left_ptr];
      arr[left_ptr] = arr[right_ptr];
      arr[right_ptr] = temp;
    }
  }

  const temp = arr[left_ptr];
  arr[left_ptr] = arr[right];
  arr[right] = temp;
  return left_ptr;
};

const quick_sort = (arr, left, right) => {
  if (right - left <= 0) { return; } // everything is sorted
  else {
    const pivot = arr[right];
    const pivot_location = partition_array(arr, left, right, pivot);
    quick_sort(arr, left, pivot_location - 1);
    quick_sort(arr, pivot_location + 1, right);
  }
};

arr = [10, 7, 8, 9, 1, 5, 1, 1, 1, 1, 5, 10];

console.log(arr);
quick_sort(arr, 0, arr.length - 1);
console.log(arr);
