// -- 1 --
// У вас є масив об’єктів fruts, і в кожному з них є name
// Напишіть код, який перетворює їх в масив імен.

// const fruits = [
//   { id: 0, name: "Apple" },
//   { id: 1, name: "Tomat" },
//   { id: 2, name: "Cherry" },
//   { id: 3, name: "Orange" },
// ];

// const fruitNames = fruits.map((fruit) => fruit.name);

// console.log(fruitNames);

// -- 2 --
//Виведіть парні числа від 2 до 10, використовуючи цикл for.

// for (let number = 2; number <= 10; number += 2) {
//   console.log(number);
// }

// -- 3 --
//Замініть цикл "for" на "while"

// for (let i = 0; i < 5; i++) {
//   console.log(`цифра ${i}!`);
// }

// let i = 0;
// while (i < 5) {
//   console.log(`цифра ${i}!`);
//   i++;
// }

// -- 4 --
//Напишіть цикл, який пропонує prompt ввести число більше за 100.
//Якщо відвідувач введе менше число – попросити ввести ще раз, і так далі.
//Цикл повинен запитувати число доти, доки відвідувач не введе число,
// більше за 100, або не скасує ввід/введе порожній рядок.

// let message;

// do {
//   message = prompt("Введіть число більше за 100");
// } while (message < 100 && message);

// -- 5 --
// Вирахуйте середній вік
// const girls = [
//   { age: 23, name: "Оля" },
//   { age: 29, name: "Аня" },
//   { age: 10, name: "Юля" },
//   { age: 20, name: "Катя" },
// ];

// const totalAge = girls.reduce((sum, girl) => sum + girl.age, 0);

// const avarageAge = totalAge / girls.length;
// console.log(avarageAge);
