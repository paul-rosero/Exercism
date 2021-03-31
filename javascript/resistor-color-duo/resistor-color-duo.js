//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const colorData = [
  "black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"
]
export const decodedValue = (colorsArr) => {
  const answer = colorsArr.slice(0, 2).map(i => colorData.indexOf(i)).join("");
  return parseInt(answer)
}
