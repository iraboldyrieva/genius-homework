// -----1----
// Напишіть такий JavaScript, щоб після натискання на кнопку button, елемент
// <div id="text"> зникав.

// const text = document.querySelector("#text");
// const btn = document.querySelector("#button");

// btn.addEventListener("click", function () {
//   text.style.display = "none";
// });

// -----2----
// Напишіть такий код, щоб після натискання на кнопку, вона зникала.

// const btn = document.querySelector("#button");

// btn.addEventListener("click", function () {
//   btn.style.display = "none";
// });

// -----3----
// Створіть дерево, яке показує/приховує дочірні вузли при кліці

// const tree = document.querySelector("#tree");

// tree.addEventListener("click", function (event) {
//   const target = event.target;

//   if (target.tagName !== "LI") return;

//   const childUl = target.querySelector("ul");
//   if (!childUl) return;

//   childUl.classList.toggle("hidden");
// });
