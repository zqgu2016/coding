const debounce = (fn, waitFor) => {
  let timerId;
  const debounced = () => {
    if (timerId) {
      return;
    }

    timerId = setTimeout(() => {
      fn();
      clearTimeout(timerId);
      timerId = null;
    }, waitFor);
  };

  return debounced;
};
