const bubbleSort = (arr) => {
  const len = arr.length
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      const pre = arr[j]
      const next = arr[j + 1]
      if (pre.length > next.length) {
        const temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  return arr
}


const getStringFromArray = (arr, type = "LONGEST", num) => {
  if (!Array.isArray(arr)) {
    return null;
  }

  if (arr.some((v) => typeof v !== "string")) {
    return null;
  }

  const newArr = bubbleSort([...arr]);

  if (type === "SPECIAL_LENGTH" && typeof num === "number") {
    return arr.filter((v) => v.length === num);
  }

  if (type === "SHORTEST") {
    return newArr[0];
  }

  return newArr.pop();
};

const arr = ["a", "aaa", "aa"];
console.log("LONGEST: ", getStringFromArray(arr));
console.log("SHORTEST: ", getStringFromArray(arr, "SHORTEST"));
console.log("SPECIAL_LENGTH 2: ", getStringFromArray(arr, "SPECIAL_LENGTH", 2));
