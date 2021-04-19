//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const colorData = [
  "black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"
];

export const decodedValue = ([color1, color2]) => {
  return colorData.indexOf(color1) * 10 + colorData.indexOf(color2);
};
