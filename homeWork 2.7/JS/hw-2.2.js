//work1
let a = 10;
alert(a);
a = 20;
alert(a);

//work2
const firstIphoneReleaseYear = 2007;
alert(firstIphoneReleaseYear);

//work3
const jsCreatorName = "Brendan Eich";
alert(jsCreatorName);

//work4
let x = 10,
  y = 2;
alert(x + y);
alert(x - y);
alert(x * y);
alert(x / y);

//work5
let result = 2 ** 5;
alert(result);

//work6
let d = 9,
  b = 2;
alert(d % b);

//work7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

//work8
let age = prompt("Сколько вам лет?");
alert(age);

//work9
const user = {
  name: "Artur",
  age: 29,
  isAdmin: true,
};

//work9.1
user["city of residence"] = "Baksan";

//work9.2
user.age = 22;

//work9.3
delete user["city of residence"];

//work9.4
let info = prompt("Какую информацию хотите узнать о пользователе?");
alert(user[info]);

//work10
let userName = prompt("Как ваше имя?");
alert(`Привет, ${userName}"!"`);
