//work1
let testStr = "first work";
testStr = testStr.toUpperCase();

console.log(testStr);

//work2
const searchStart = (arr, str) => {
  return arr
    .map((el) => el.toLowerCase())
    .filter((el) => el.includes(str.toLowerCase()));
};

console.log(searchStart(["Кошка", "Кит", "Комар", "Носорог"], "ко"));
console.log(searchStart(["яблоко", "груша", "гриб", "огурец"], "гру"));
console.log(searchStart(["Дом", "Банк", "Больница", "Театр"], "Кино"));

//work3
let testNum = 32.58884;

console.log(Math.floor(testNum));
console.log(Math.ceil(testNum));
console.log(Math.round(testNum));

//work4
const arrNum = [52, 53, 49, 77, 21, 32];

console.log(Math.min(...arrNum));
console.log(Math.max(...arrNum));

//work5
const getRandomNum = (minValue, maxValue) => {
  return Math.round(Math.random() * (maxValue - minValue)) + minValue;
};

console.log(getRandomNum(1, 10));

//work6
function getRandomArrNumbers(num) {
  const arr2 = [];

  for (let i = 0; i < Math.floor(num / 2); i++) {
    arr2.push(Math.round(Math.random() * num));
  }

  return arr2;
}

console.log(getRandomArrNumbers(7));
console.log(getRandomArrNumbers(12));

//work7(Смотрите work5, задания схожи, диапозоны чисел разные)
console.log(getRandomNum(2, 7));

//work8
let currentDate = new Date();

console.log(currentDate);

//work9(Переменную currentDate задал в work8, чтобы не повторяться)
currentDate.setDate(currentDate.getDate() + 73);

console.log(currentDate.toLocaleDateString());

//work10
const displayDate = (x, y) => {
  function dateFormatter(t) {
    let d = new Intl.DateTimeFormat("ru", t);
    return d.format(x);
  }

  let [day, month, year, weekday, hour, minute, second] = y.map(dateFormatter);

  return `Дата: ${day} ${month} ${year} - это ${weekday}. Время: ${hour}:${minute}:${second}`;
};

const options = [
  { day: "numeric" },
  { month: "long" },
  { year: "numeric" },
  { weekday: "long" },
  { hour: "numeric" },
  { minute: "numeric" },
  { second: "numeric" },
];

console.log(displayDate(new Date(), options));

//work11
function rememberWords() {
  let words = [
    "Яблоко",
    "Груша",
    "Дыня",
    "Виноград",
    "Персик",
    "Апельсин",
    "Мандарин",
  ];

  words = words.sort(() => Math.random() - 0.5);
  alert(words);

  let firstQuestion = prompt(
    "Чему равнялся первый элемент массива?"
  ).toLowerCase();
  let secondQuestion = prompt(
    "Чему равнялся последний элемент массива?"
  ).toLowerCase();

  if (
    firstQuestion === null ||
    secondQuestion === null ||
    !firstQuestion.trim() ||
    !secondQuestion.trim()
  ) {
    alert("Некорректный ввод!");
  } else if (
    firstQuestion === words.map((el) => el.toLowerCase())[0] &&
    secondQuestion === words.map((el) => el.toLowerCase())[words.length - 1]
  ) {
    alert("Поздравляем! Вы угадали все элементы");
  } else if (
    firstQuestion === words.map((el) => el.toLowerCase())[0] ||
    secondQuestion === words.map((el) => el.toLowerCase())[words.length - 1]
  ) {
    alert("Вы были близки к победе!");
  } else {
    alert("Неверно, попробуй еще");
  }
}
