Lesson_2_js_basics/script.js
// ЦИКЛЫ

// 1. Вывести в консоль числа от 0 до 36

// откуда начинается цикл
// где цикл должен остановиться
// с каким шагом идет цикл

// for(let i = 0; i <= 36; i++){
//   console.log(i)
// }


// 2. Вывести в консоль числа от 20 до 145

// for(let i = 20; i <= 145; i++){
//   console.log(i);
// }

// 3. Вывести в консоль числа от 20 до 5

// for(let i = 20; i >= 5; i--){
//   console.log(i);
// }


// 4. Вывести в консоль четные числа от 3 до 20

// for(let i = 3; i <= 20; i++){
//   if(i % 2 === 0){
//     console.log(i)
//   }
// }



const numbers = [33, -75, 5, 98, 67, 33, 105, -1, -8, 1000];

// 1. Дан массив чисел. Вывести все числа массива в консоль

// for(let i = 0; i < numbers.length; i++){
//   console.log(numbers[i])
// }


// 2. Вывести в консоль только положительные числа из массива numbers

// for (let i = 0; i < numbers.length; i++) {
//   if(numbers[i] > 0){
//     console.log(numbers[i])
//   }
// }

// for (let i = 0; i < numbers.length; i++) {
//   numbers[i] > 0 && console.log(numbers[i])
// }

// 3. Вывести в консоль только нечетные отрицательные числа из массива numbers

// for (let i = 0; i < numbers.length; i++) {
//   if(numbers[i] < 0 && numbers[i] % 2 !== 0){
//     console.log(numbers[i])
//   }
// }


// 4. Вывести в консоль только числа заканчивающиеся на 5 из массива numbers

// for (let i = 0; i < numbers.length; i++) {
//   if(numbers[i] % 10 === 5 || numbers[i] % 10 === -5){
//     console.log(numbers[i])
//   }
// }


// Math

Math.abs(4); // 4
Math.abs(-4); // 4

Math.ceil(4.13); // 5 - округляет вверх
Math.floor(4.99); // 4 - округляет вниз
Math.round(4.13); // 4 - - округляет по правилам математики

Math.pow(2, 3); // 8
Math.pow(2, 4); // 16
Math.sqrt(16); // 4

const a = Math.max(4, 18, 105, -3); // 105
const b = Math.min(4, 18, 105, -3); // -3

// console.log(a);
// console.log(b);

// spread operator
// console.log(numbers); // []
// console.log(...numbers); // 
// console.log(Math.max(...numbers)); // 1000


// 1. Создать переменную, которой в качестве значения будет присвоено случайно целое число от 0 до 10

const randomNum = Math.round(Math.random() * 10);
const randomNum1 = Math.floor(Math.random() * 11);

// 2. Создать переменную, которой в качестве значения будет присвоено случайно целое число от 0 до 20

const randomNum2 = Math.round(Math.random() * 20);


// 3. Создать переменную, которой в качестве значения будет присвоено случайно целое число от 10 до 20

const randomNum3 = Math.round(Math.random() * 10) + 10;

// console.log(randomNum3);


// 4. Вывести в консоль только числа заканчивающиеся на 5 из массива numbers

// for (let i = 0; i < numbers.length; i++) {
//   if(Math.abs(numbers[i]) % 10 === 5){
//     console.log(numbers[i])
//   }
// }


// 5. Вывести в консоль все элементы из массива numbers возведенными во 2 степень

for (let i = 0; i < numbers.length; i++) {
  console.log(Math.pow(numbers[i], 2))
}
