const GIGASECOND = 10**12

export const gigasecond = (initialDate) => {
  const initialTime = initialDate.getTime()
  return new Date (initialTime + GIGASECOND)
};
