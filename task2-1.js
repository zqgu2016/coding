const logger = (obj) => {
  for (const key in obj) {
    let value = obj[key];
    Object.defineProperty(obj, key, {
      get() {
        return value;
      },
      set(newVal) {
        console.log(`prop ${key}: ${value} => ${newVal}`);
        value = newVal;
        return newVal;
      },
    });
  }
};

let a = { bar: "foo", b: "b" };
logger(a, "bar");
a.bar = "baz";
a.b = "c";
