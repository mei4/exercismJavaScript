export const decodedValue = ([color1, color2]) => {
  let result = COLORS.indexOf(color1) * 10
  result += COLORS.indexOf(color2)
  
  return result
}

export const COLORS = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white']

