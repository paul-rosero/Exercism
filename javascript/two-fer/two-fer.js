//
// This is only a SKELETON file for the 'Two fer' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// This works perfectly but the advice I got so I can pass this, is to do what I'm going to do next. 
// export const twoFer = (name) => {
//   console.log(name)
//   if (name) {
//     return `One for ${name}, one for me.`
//   } else {
//     return "One for you, one for me."
//   }
// };

export const twoFer = (name = "you" ) => {
  return `One for ${name}, one for me.`
};
