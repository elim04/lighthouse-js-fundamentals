const isEven = function (num) {
  return num % 2 === 0;
}

const tenIsEven = isEven(10);
const elevenIsEven = isEven(11);

console.log(tenIsEven);
console.log(elevenIsEven);

//don't need to declare variables to run this function, can just use console function to run

console.log(isEven(10));
console.log(isEven(11));