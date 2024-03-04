// Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах 1, 0, -3.

// let a = 1;

// a > 0 ? console.log(true) : console.log(false);

// a = 0;

// a > 0 ? console.log(true) : console.log(false);

// a = -3;

// a > 0 ? console.log(true) : console.log(false);

// Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах 'test',"qwerty", true

// let a = "test";

// switch (a) {
//   case "test":
//     console.log(true);
//
//   case "qwerty":
//     console.log(false);
//
//   case true:
//     console.log(false);
//
// }

// a = "qwerty";

// switch (a) {
//   case "test":
//     console.log(true);
//
//   case "qwerty":
//     console.log(false);
//
//   case true:
//     console.log(false);
//
// }

// a = true;

// switch (a) {
//   case "test":
//     console.log(true);
//
//   case "qwerty":
//     console.log(false);
//
//   case true:
//     console.log(false);
//
// }

// Якщо змінна більше 10 - відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах 1, 10, 13.

// let a = 1;

// if (a > 10) {
//   a -= 5;
//   console.log(a);
// } else if (a < 10) {
//   a += 5;
//   console.log(a);
// }

// a = 10;

// if (a > 10) {
//   a -= 5;
//   console.log(a);
// } else if (a < 10) {
//   a += 5;
//   console.log(a);
// } else {
//   console.log("a дорівнює рівно 10");
// }

// a = 13;

// if (a > 10) {
//   a -= 5;
//   console.log(a);
// } else if (a < 10) {
//   a += 5;
//   console.log(a);
// }

//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу

// let month = prompt("Введіть число від 1 до 12");

// switch (month) {
//   case "1":
//     console.log("Січень");
//     break;
//   case "2":
//     console.log("Лютий");
//     break;
//   case "3":
//     console.log("Березень");
//     break;
//   case "4":
//     console.log("Квітень");
//     break;
//   case "5":
//     console.log("Травень");
//     break;
//   case "6":
//     console.log("Червень");
//     break;
//   case "7":
//     console.log("Липень");
//     break;
//   case "8":
//     console.log("Серпень");
//     break;
//   case "9":
//     console.log("Вересень");
//     break;
//   case "10":
//     console.log("Жовтень");
//     break;
//   case "11":
//     console.log("Листопад");
//     break;
//   case "12":
//     console.log("Грудень");
//     break;
// }

//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел

// let number = prompt("Введіть тризначне число");

// if (number >= 100 && number <= 999) {
//   let hundreds = Math.floor(number / 100);
//   let tens = Math.floor((number % 100) / 10);
//   let ones = number % 10;

//   let sum = hundreds + tens + ones;

//   alert(sum);
// }
