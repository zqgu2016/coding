const foo = () => {
  let a = 1
  return () => {
    return a + 1
  }
}
