const waitFor = (seconds) => {
  return new Promise((resolve) => {
    setTimeout(resolve, seconds * 1000);
  });
};
waitFor(3).then(() => console.log("end"));
