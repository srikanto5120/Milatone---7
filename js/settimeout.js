/* console.log("this is a first section");
console.log("This  is a secound section");
setTimeout(function () {
  console.log("this  is a set time out");
}, 3000);
console.log("This is a thrid section");
 */
const x = () => {
  for (i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i - (i - 1));
    }, i * 2000);
  }
};
x();
