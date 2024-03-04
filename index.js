// EXAMPLE 1 - Insert a Character after every N Characters in JavaScript

const str = 'ababab';

const result = str.replace(/.{2}/g, '$&c');
console.log(result); // 👉️ "abcabcabc"

// ------------------------------------------------------------------

// // EXAMPLE 2 - Insert a Character after every N characters using reduce

// function insertAfterEveryN(str, char, n) {
//   const result = str
//     .split('')
//     .reduce((accumulator, current, index) => {
//       if (index % n === 1) {
//         return accumulator + current + char;
//       }

//       return accumulator + current;
//     }, '');

//   return result;
// }

// // 👇️ "abcabcabc"
// console.log(insertAfterEveryN('ababab', 'c', 2));

// ------------------------------------------------------------------

// // EXAMPLE 3 - Insert a Character after every N characters using `match`

// const str = 'ababab';

// const matches = str.match(/.{1,2}/g);
// console.log(matches); // 👉️ [ 'ab', 'ab', 'ab' ]

// const result = matches.join('c');
// console.log(result); // 👉️ abcabcab
