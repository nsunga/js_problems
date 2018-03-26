const merge_sort = (arr) => {
  if (arr.length === 1) { return arr; }
  const middle = Math.floor(arr.length/2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  return merge(merge_sort(left), merge_sort(right));
};

const merge = (left, right) => {
  let result = [];
  let index_left = 0;
  let index_right = 0;

  // if either indices are greater than the sub array length,
  // nothing left to compare int that sub array.
  // concat the rest of the elements b/c it should be in order
  while (index_left < left.length && index_right < right.length) {
    if (left[index_left] < right[index_right]) {
      result.push(left[index_left]);
      index_left++;
    } else {
      result.push(right[index_right]);
      index_right++;
    }
  }

  return result.concat(left.slice(index_left)).concat(right.slice(index_right));
};

const list = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3];
console.log(merge_sort(list));
