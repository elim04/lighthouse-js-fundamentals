//example 1
const chorus = "Let's dance!";
let repeat = 0;
while (repeat < 10) {
  if (repeat === 5) {
    console.log("*change key*"); //ex 2 shows if inside loop
  }
  console.log(chorus);
  repeat++;
}
console.log("Until the sun comes up!");

