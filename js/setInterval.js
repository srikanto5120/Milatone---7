// console.log("First");
// console.log("Secound");

// setInterval(() => {
//   console.log("thrid");
// }, 1000);
// console.log("Fourth");
let minite = 0;
const secound = setInterval(() => {
  minite++;
  console.log(minite);
  if (minite >= 60) {
    clearInterval(secound);
  }
}, 1000);
