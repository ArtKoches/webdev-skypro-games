//work1
const array = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
  if (array[i] === 10) break;
}

//work2
const array1 = [1, 5, 4, 10, 0, 3];
let arrayIndex = array1.indexOf(4);

console.log(arrayIndex);

//work3
const array2 = [1, 3, 5, 10, 20];
let arrayJoin = array2.join(" ");

console.log(arrayJoin);

//work4
const randomArray = [];

for (let i = 0; i < 3; i++) {
  randomArray.push([]);
  for (let j = 0; j < 1; j++) {
    randomArray[i].push(j + 1, j + 1, j + 1);
  }
}

console.log(randomArray);

//work5
const array3 = [1, 1, 1];
array3.push(2, 2, 2);

console.log(array3);

//work6
let array4 = [9, 8, 7, "a", 6, 5];
array4 = array4.filter((el) => typeof el === "number");
array4.sort();

console.log(array4);

//work7
const array5 = [9, 8, 7, 6, 5];

let numType = prompt("Я загадал число. Попробуй угадать что это за число.");

numType === null
  ? alert("Всего хорошего и до новых встреч!")
  : isNaN(numType) || !numType.trim()
  ? alert("Некорректный ввод, введи любое число.")
  : array5.includes(Number(numType))
  ? alert("Угадал!")
  : alert("Не угадал");

//work8
let randomStr = "abcdef";

randomStr = randomStr.split("");
randomStr.reverse();
randomStr = randomStr.join("");

console.log(randomStr);
// console.log(randomStr.split("").reverse().join("")); //2 способ

//work9
const array6 = [
  [1, 2, 3],
  [4, 5, 6],
];

let arrayFlat = array6.flat();

console.log(arrayFlat);

//work10
const array7 = [2, 9, 7, 5, 4, 3];

for (let i = 0; i < array7.length - 1; i++) {
  console.log(array7[i] + array7[i + 1]);
}

//work11
const array8 = [3, 6, 5, 8, 9];

const arraySquare = (array8) => {
  return array8.map((e) => e ** 2);
};

console.log(arraySquare(array8));

//work12
const array9 = ["слово", "", "слог", "длинное предложение", "буква"];

const getLengthWords = (array9) => {
  return array9.map((el) => el.length);
};

console.log(getLengthWords(array9));

//work13
const filterPositive = (array10) => {
  return array10.filter((array10) => array10 < 0);
};

console.log(filterPositive([-1, 0, 5, -10, 56]));
console.log(filterPositive([-25, 25, 0, -1000, -2]));
