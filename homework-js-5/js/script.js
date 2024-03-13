// --1--
// 1) написати об*єкт студента який буде виводити ім*я, спеціальнісь, середній
// бал і кількість пропущених занять
// 2) написати метод який буде виводити цю інформацію
// 3) написати три варіанти студентів
// 4) прикріпити знначення за допомогою call apply bind

// const studentInfo = {
//   displayInfo: function () {
//     console.log(
//       `Name: ${this.name}, Special: ${this.special}, GPA: ${this.gpa}, Number of missed class: ${this.missedClass}`
//     );
//   },
// };

// const studentOne = {
//   name: "Ann",
//   special: "journalistic",
//   gpa: 10,
//   missedClass: 2,
// };

// const studentTwo = {
//   name: "Nik",
//   special: "math",
//   gpa: 6,
//   missedClass: 4,
// };

// const studentThree = {
//   name: "Merry",
//   special: "chemistry",
//   gpa: 12,
//   missedClass: 1,
// };

// studentInfo.displayInfo.call(studentOne);
// studentInfo.displayInfo.call(studentTwo);
// studentInfo.displayInfo.call(studentThree);

// const displayStudent1 = studentInfo.displayInfo.bind(studentOne);
// const displayStudent2 = studentInfo.displayInfo.bind(studentTwo);
// const displayStudent3 = studentInfo.displayInfo.bind(studentThree);

// displayStudent1();
// displayStudent2();
// displayStudent3();

// studentInfo.displayInfo.apply(studentOne, ["best"]);
// studentInfo.displayInfo.apply(studentTwo, ["best"]);
// studentInfo.displayInfo.apply(studentThree, ["best"]);

// --2--
// Написати дві кнопки і закріпити на них функції
// при натисканні на кнопку html - має видати коротке визначення що це таке
// при натисканні на кнопку css - має видати коротке визначення що це таке

// document.querySelector("#htmlBtn").addEventListener("click", function () {
//   document.querySelector(".definition-content").style.display = "none";
//   document.querySelector("#definitionHtml").style.display = "block";
// });

// document.querySelector("#cssBtn").addEventListener("click", function () {
//   document.querySelector(".definition-content").style.display = "none";
//   document.querySelector("#definitionCss").style.display = "block";
// });

// --3--
// Написати функцію магазин, яка отримує назву товару, ціну за кг і кількість товару
// функція має повертати назву товару і вартість
// перевірити на варіантах:
// 1) banana 30, 4,5
// 2) cherry 58, 1,3
// 3) jrange 89. 3,4

// function shop(itemName, priceKg, amount) {
//   let totalPrice = priceKg * amount;
//   return `Your total price for ${itemName} is: ${totalPrice.toFixed(2)}`;
// }

// console.log(shop("banana", 30, 4.5));
// console.log(shop("cherry", 58, 1.3));
// console.log(shop("orange", 89, 3.4));
