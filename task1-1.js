const sortArray = (arr) => {
  return arr.sort((a, b) => {
    if (a.length > b.length) {
      return 1;
    }

    if (a.length < b.length) {
      return -1;
    }

    return 0;
  });
};

const getStringFromArray = (arr, type = "LONGEST", num) => {
  if (!Array.isArray(arr)) {
    return null;
  }

  if (arr.some((v) => typeof v !== "string")) {
    return null;
  }

  const newArr = [...arr];
  sortArray(newArr);

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
