let nickname = 'ごっしー';
let age = 28;

console.log('私のニックネームは' + nickname + 'です。年齢は' + age + '歳です。')


let languages = [
  'javaScript',
  'PHP',
  'Ruby',
  'Python',
  'Go'];

console.log(`私の好きな言語は${languages[0]}です。次は${languages[3]}を勉強してみたいです。`);


let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};

console.log(user.age);


let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];

console.log(playerList[1].favorites[1]);


let averageAge = (playerList[0].age + playerList[1].age + playerList[2].age) / 3;

console.log(averageAge);


function sayHello() {
  console.log('Hello');
}
sayHello();

let sayWorld = function() {
  console.log('World');
}
sayWorld();


user.birthday = '2000-09-27';
console.log(user);

user.sayHello = function() {
  console.log('Hello!');
};
console.log(user.sayHello); //確認用で残してます


let calc = {};

calc.add = function(x, y) {
console.log(x + y);
};
calc.add(1, 6);

calc.subtract = function(x, y) {
  console.log(x - y);
};
calc.subtract(11, 1);

calc.multiply = function(x, y) {
  console.log(x * y);
};
calc.multiply(7,7);

calc.divibe = function(x, y) {
  console.log(x / y);
};
calc.divibe(10,2);

console.log(calc); //配列に入ったか確認用


function remainder(x, y) {
  return x % y;
}

let x = 5;
let y = 3;
console.log(`${x} を ${y} で割った余りは ${remainder(x, y)} です。`);



//関数fooで定義された変数は{}のスコープ内でしか参照ができず、console.logはスコープ外からアクセスし失敗し、未定義のエラーとなった。
function foo() {
  let x = 1;
}
// console.log(x);

//応用編

let random = Math.floor(Math.random() * 10);
console.log('random => ', random);


setTimeout(function () {
  console.log('Hello World');
}, 3000);


let num = 3;
if(num > 0) {
  console.log('num is greater than 0');
} else if(num < 0) {
  console.log('num is less than 0');
} else if(num === 0) {
  console.log('num is 0');
}


let numbers = [];
for(let i = 0; i < 100; i++) {
  numbers[i] = i;
}
console.log(numbers);


let mixed = [4, '2', 5, '8', '9', 0, 1];
for(let i = 0; i < mixed.length; i++) {
  if(typeof mixed[i] === 'number') {
    if(mixed[i] % 2 === 0) {
      console.log('even');
    } else {
      console.log('odd');
    }
  } else {
    console.log('not number')
  }
}