// work 1
let hello = 0;
while (hello < 2) {
  console.log("Привет");
  hello++;
}

// work 2
let number = 1;
while (number <= 5) {
  console.log(number);
  number++;
}

// work 3
for (let i = 7; i <= 22; i++) {
  console.log(i);
}

// work 4
const obj = {
  Коля: 200,
  Вася: 300,
  Петя: 400,
};
for (const key in obj) {
  console.log(`${key} - зарплата ${obj[key]} долларов.`);
}

// work 5
let n = 1000;
let num = 0;
while (n > 50) {
  n = n / 2;
  num++;
}
console.log(`Получилось ${n}, а количество итераций ${num}.`);

// work 6
let firstFriday = 2;
for (let i = firstFriday; i <= 31; i += 7) {
  console.log(`Сегодня пятница, ${i}-е число. Необходимо подготовить отчет.`);
}
