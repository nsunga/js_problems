const arr = [1, 2, 5, 9, 11, 12, 12, 30, 31, 76, 9138, 10000];

const binary_search = (arr, search_val, left, right) => {
  const mid = Math.floor((left + right)/2);
  if (left > right) { return false; }
  if (arr[mid] == search_val) { return true; }
  else if (arr[mid] <= search_val) {
    if ((right - mid) == 1) {
      if (arr[right] == search_val) { return true; }
      else { return false; }
    }
    return binary_search(arr, search_val, mid, right); }
  else if (arr[mid] >= search_val) {
    if ((mid - left) == 1) {
      if (arr[left] == search_val) { return true; }
      else { return false; }
    }
    return binary_search(arr, search_val, left, mid-1);
  }
};

console.log(binary_search(arr, 9138, 0, arr.length-1 ));
