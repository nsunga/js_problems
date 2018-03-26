const partition = (arr, left, right) => {
  const pivot = arr[right];
  let i = (left - 1);
  for (let j = left; j < right; j++) {
    if (arr[j] <= pivot) {
      i++;
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }

  const temp = arr[i+1];
  arr[i+1] = arr[right];
  arr[right] = temp;

  return i+1;
};

const quick_sort = (arr, left, right) => {
  if (left < right) {
    const partiion_index = partition(arr, left, right);
    quick_sort(arr, left, partiion_index - 1);
    quick_sort(arr, partiion_index, right);
  }
};

arr = [10, 7, 8, 9, 1, 5, 1, 1, 1, 1, 5, 10];
quick_sort(arr, 0, arr.length-1);
console.log(arr);
