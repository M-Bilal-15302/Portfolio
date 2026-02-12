// FOREACH LOOP OF ARRAY
// let arr = [1, 2, 3, 4, 5];
// arr.forEach((val) => {
//   sqr = val * val;
//   console.log(sqr);
// });

//   FUNCTION
// const vowels = (msg) => {
//   count = 0;
//   for (i of msg) {
//     if (i == "a" || i == "e" || i == "o" || i == "u" || i == "i") {
//       count++;
//     }
//   }
//   return count;
// };

// totalvowels = vowels("write something to count vowels ");
// console.log(totalvowels);

// let guess = prompt("enter number to guess(0-50)");
// let num = 25;
// while (guess != num) {
//   if (guess > num) {
//     alert("too high try again");
//   } else {
//     alert("too low try again");
//   }

//   guess = prompt("enter again");
// }
// alert("congratulation you made it");

//   FILTER METHOODE OF ARRAY
// let marks = [98, 54, 99, 56, 95, 54];
// let grtval = marks.filter((val) => {
//   if (val > 90) {
//     return val;
//   }
// });
// console.log(grtval);

// let n = prompt("enter a number");
// let arr = [];
// for (let i = 1; i <= n; i++) {
//   arr.push(i);
// }
// console.log(arr);
// let sum = arr.reduce((pri, cur) => {
//   total = pri + cur;
//   return total;
// });
// console.log(`the sum of a array = ${sum}`);

// let product = arr.reduce((pri, cur) => {
//   mul = pri * cur;
//   return mul;
// });
// console.log(`the product of a array = ${product}`);

// // let a = [];
// // b = [a.push(5)];
// // console.log(b);

const navbarToggle = document.querySelector(".navbar-toggle");

const navbar = document.querySelector(".navbar");

navbarToggle.addEventListener("click", () => {
  navbarToggle.classList.toggle("active");
  navbar.classList.toggle("active");
});
