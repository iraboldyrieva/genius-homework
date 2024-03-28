// -----1----
// Напишіть функцію printNumbers(from, to) яка виводить число кожну секунду,
// починаючи від from і закінчуючи to.
// Зробіть два варіанти рішення.
// Використовуючи setInterval.
// Використовуючи вкладений setTimeout

// function printNumbers(from, to) {
//   let currentNum = from;

//   let timer = setInterval(function () {
//     console.log(currentNum);

//     if (currentNum === to) {
//       clearInterval(timer);
//     }
//     currentNum++;
//   }, 1000);
// }

// printNumbers(0, 10);

// function printNumbers(from, to) {
//   let currentNum = from;

//   setTimeout(function go() {
//     console.log(currentNum);
//     if (currentNum < to) {
//       setTimeout(go, 1000);
//     }
//     currentNum++;
//   }, 1000);
// }

// printNumbers(0, 10);

// -----2----
// Вбудована функція setTimeout використовує колбек-функції. Створіть
// альтернативу яка базується на промісах.
// Функція delay(ms) повинна повертати проміс, який перейде в стан resolved через
// ms мілісекунд, так щоб ми могли додати до нього .then:
// function delay(ms) {
// // ваш код
// }delay(3000).then(() => alert('виконалось через 3 секунди'));

// function delay(ms) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, ms);
//   });
// }

// delay(3000).then(() => alert("виконалось через 3 секунди"));
