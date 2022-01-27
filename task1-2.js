const sqrt = (num) => {
  if (typeof num !== "number") {
    return null;
  }

  const FIXED = 0.001;
  let low = 0;
  let high = num;
  let mid = (low + high) / 2;

  while (true) {
    const square = mid * mid;
    if (square > num) {
      high = mid;
    }

    if (square < num) {
      low = mid;
    }

    if (square.toFixed(4) === num.toFixed(4)) {
      return mid
    }

    mid = (low + high) / 2;
  }
};

console.log(parseFloat(sqrt(2).toFixed(2), 10));
console.log(parseFloat(sqrt(4).toFixed(2), 10));
