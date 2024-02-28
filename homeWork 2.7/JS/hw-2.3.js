//work1
let password = "Sky";
let typePassword = prompt("Введите пароль");
if (typePassword === password) {
  alert("Пароль введен верно");
} else {
  alert("Пароль введен неправильно");
}

//work2
let c = 22;
if (c > 0 && c < 10) {
  console.log("Верно");
} else {
  console.log("Неверно");
}

//work3
let d = 94;
let e = 207;
if (d > 100 || e > 100) {
  console.log("Верно");
} else {
  console.log("Неверно");
}

// work4
let a = "2";
let b = "3";
alert(Number(a) + Number(b));

//work5
let monthNumber = Number(prompt("Введите номер месяца"));
switch (monthNumber) {
  case 3:
  case 4:
  case 5:
    console.log("Весна");
    break;

  case 6:
  case 7:
  case 8:
    console.log("Лето");
    break;

  case 9:
  case 10:
  case 11:
    console.log("Осень");
    break;

  case 1:
  case 2:
  case 12:
    console.log("Зима");
    break;

  default:
    console.log("Неверная комбинация чисел, попробуйте еще раз.");
    break;
}
