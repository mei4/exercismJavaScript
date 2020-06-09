export const gigasecond = (initialDate) => {
  const initialTime = new Date(initialDate.getTime())
  initialTime.setUTCSeconds(initialTime.getSeconds() + 1000000000)
  return initialTime
};
