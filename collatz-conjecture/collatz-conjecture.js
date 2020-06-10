
export const steps = (number) => {
  const transformNumber = (number) => {
    return (number%2 == 0) ? number/2 : number*3 + 1
  }

  const steps = (number, count = 0) => {
    if (number == 1) return count
    return steps(transformNumber(number), count + 1)
  }

  if(number <= 0) throw new Error('Only positive numbers are allowed')

  return steps(number)
};


