//homework1
const people = [
  { name: "Глеб", age: 29 },
  { name: "Анна", age: 17 },
  { name: "Олег", age: 7 },
  { name: "Оксана", age: 47 },
];

console.log(people.sort((x, y) => x.age - y.age));

//homework2
function isPositive(num) {
  return num > 0;
}

function isMale(person) {
  return person.gender === "male";
}

function filter(arr, ruleFunction) {
  const emptyArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (ruleFunction(arr[i])) {
      emptyArray.push(arr[i]);
    }
  }

  return emptyArray;
}

// return arr.filter(ruleFunction);

console.log(filter([3, -4, 1, 9], isPositive));

const people2 = [
  { name: "Глеб", gender: "male" },
  { name: "Анна", gender: "female" },
  { name: "Олег", gender: "male" },
  { name: "Оксана", gender: "female" },
];

console.log(filter(people2, isMale));

//homework3
function getDateTimer() {
  const timerId = setInterval(() => {
    let currDay = new Date();
    console.log(currDay);
  }, 3000);

  setTimeout(() => {
    clearInterval(timerId);
    console.log("30 секунд прошло");
  }, 30000);
}

getDateTimer();

//homework4
function delayForSecond(callback) {
  setTimeout(() => {
    callback();
  }, 1000);
}

delayForSecond(function () {
  console.log("Привет, Глеб!");
});

//homework5
function delayForSecond2(cb) {
  setTimeout(() => {
    console.log("Прошла одна секунда");
    if (cb) {
      cb();
    }
  }, 1000);
}

function sayHi(name) {
  console.log(`Привет, ${name}!`);
}

delayForSecond2(() => sayHi("Глеб"));
