
function sort<T>(arr: T[], compareFn: (a: T, b: T) => number) {
  let compare = compareFn || ((a: T, b: T) => {
    if (typeof a === "number" && typeof b === "number") {
      return a - b;
    }
    if (typeof a === "string" && typeof b === "string") {
      return a.charCodeAt(0) - b.charCodeAt(0);
    }
    return 0;
  })
  for (let i = 0; i < arr.length - 1; i++) {
    let j = i;
    while (j >= 0 && compare(arr[j], arr[j + 1]) > 0) {
      const current = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = current;
      j--
    }
  }
  return arr;
}

export default sort;