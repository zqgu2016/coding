const DEFAULT_CACHE_DURATION = 5 * 1000;
const store = {};

setInterval(() => {
  for (const key in store) {
    const newExpire = store[key].expire - 1000;
    if (newExpire <= 0) {
      console.log("remove key", key);
      delete store[key];
      return;
    }

    store[key].expire = newExpire;
  }
}, 1000);

const cacheWrapper = (name, fn, expireTime) => {
  store[name] = {
    expire: expireTime || DEFAULT_CACHE_DURATION,
    value: fn,
  };
};

cacheWrapper("log1", console.log);
cacheWrapper("log2", console.log, 3000);
