const getSquareRoot = (num) => {
  if (typeof num !== "number") {
    return null;
  }

  return Math.sqrt(num).toFixed(2);
};

console.log("Square Root 2:", getSquareRoot(2));
