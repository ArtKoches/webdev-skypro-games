// // work1
// function smallerNum(x, y) {
//   return x < y ? console.log(x) : console.log(y);
// }

// smallerNum(8, 4);
// smallerNum(6, 6);

// // work2
// let numType = Number(prompt("Введите число"));

// const numIdent = function () {
//   return numType % 2 == 0
//     ? console.log("Число четное")
//     : console.log("Число нечетное");
// };

// numIdent();

// // work(3.1-3.2)
// //3.1
// const numSquare = () => {
//   numType = Number(prompt("Введите число"));
//   let result = numType ** 2;
//   console.log(result);
// };

// numSquare();

// //3.2
// function retNumSquare() {
//   numType = Number(prompt("Введите число"));
//   console.log(numType ** 2);
//   return;
// }

// retNumSquare();

// // work4
// const howOldQuestion = () => {
//   let userAnswer = Number(prompt("Сколько тебе лет?"));
//   if (userAnswer > 0 && userAnswer <= 12) {
//     alert("Привет, друг!");
//   } else if (userAnswer >= 13) {
//     alert("Добро пожаловать!");
//   } else {
//     alert("Вы ввели неправильное значение");
//   }
//   return;
// };

// howOldQuestion();

// // work5
// function correctNum() {
//   let firstNum = prompt("Введите 1-ое число.");
//   let secondNum = prompt("Введите 2-ое число.");
//   return isNaN(firstNum || secondNum)
//     ? console.log("Одно или оба значения не являются числом")
//     : console.log(firstNum * secondNum);
// }

// correctNum();

// // work6
// const cubeCorrectNum = () => {
//   numType = prompt("Введи число");
//   let numCube = numType ** 3;
//   return isNaN(numType)
//     ? console.log("Переданный параметр не является числом")
//     : console.log(`${numType} в кубе равняется ${numCube}`);
// };

// cubeCorrectNum();

// // work7
// const circle1 = {
//   radius: 3,

//   getArea() {
//     let circleSquare = 3.14 * this.radius ** 2;
//     return circleSquare;
//   },
//   getPerimetr() {
//     let circlePerimetr = 2 * 3.14 * this.radius;
//     return circlePerimetr;
//   },
// };

// const circle2 = {
//   radius: 6,

//   getArea() {
//     let circleSquare = 3.14 * this.radius ** 2;
//     return circleSquare;
//   },
//   getPerimetr() {
//     let circlePerimetr = 2 * 3.14 * this.radius;
//     return circlePerimetr;
//   },
// };

// console.log(circle1.getArea());
// console.log(circle1.getPerimetr());

// console.log(circle2.getArea());
// console.log(circle2.getPerimetr());

// work8
const playSeasonsGame = () => {
  numType = Number(
    prompt(
      "Введите число от 1 до 12, а я отвечу к какому времени года он относится."
    )
  );
  let monthNumber = numType;

  if (monthNumber >= 0 && monthNumber <= 12) {
    if (monthNumber === 1 || monthNumber === 2 || monthNumber === 12) {
      alert("Зима");
    } else if (monthNumber === 3 || monthNumber === 4 || monthNumber === 5) {
      alert("Весна");
    } else if (monthNumber === 6 || monthNumber === 7 || monthNumber === 8) {
      alert("Лето");
    } else if (monthNumber === 9 || monthNumber === 10 || monthNumber === 11) {
      alert("Осень");
    }
  } else {
    alert("Некорректный ввод, проверь введенное число(от 1 до 12)!");
  }
  return;
};
