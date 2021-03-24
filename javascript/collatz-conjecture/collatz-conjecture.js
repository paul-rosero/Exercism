//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const steps = (number, counter = 0) => {
  if (number <= 0) throw "Only positive numbers are allowed";
  console.log(number);
  if (number === 1) return counter;
  return steps(number % 2 === 0 ? number / 2 : 3 * number +1, counter + 1);
}
