// 'use strict';


/* 
var leftBorderWidth = 1;
{
    let second =2;
}

console.log(second);  1 - lesson */

/* Тип данных */
// var number = 5;
// var string = "Hello";
// var sym = Symbol();
// var bolean = true;
// null;
// undefined; 
// var obj = {};

// console.log(4/0);
// console.log("string"*9); lesson - 2

// console.log(a);
/* to - string */

// 1) string turini xosil qilish yoki istalgan turni string ga o'zgartirish
// console.log(typeof (String(4)));
// 2) 
// Kankatinatsiya - ya'ni "string" turini xosil qilish boshqa turni qo'shganda xam

// console.log(typeof (String("www" + 5)));
// console.log(typeof (String("www" + false)));
// console.log('https://vk.com/catalog/' + 5);


/* to - number */
// 1) 
// console.log(typeof(Number('5')));
// 2)
// console.log(typeof(5 + +'5'));
// 3)
// console.log(typeof(parseInt('15', 10)));

// Foydalanuvchilardan keladigan xabarlar doimo "string" turida bo'ladi Ulardni "number" ko'rinishiga o'tkazish uchun quyidagi ishni qilish kere

// let answer = +prompt('Hello', '');


// Endi Mantiqiy turdagilarga o'tamiz. Quyidagilar doimo "false" qiymatni qabul qiladi
// NaN, undefined, null,  '', 0

// let switcher = null;

// if (switcher) {
//     console.log('Working..');
// }
// switcher = 1;

// if (switcher) {
//     console.log('Working..');
// }


// Foydalanuvchilar bilan aloqa qilish komandalari
// 1)
// alert('Hello World!!!');
// 2)
// confirm('Are you here?');

// let answers = confirm('Are you here?');
// console.log(answers);

// let answers = prompt('Are you here?');
// console.log(answers);



// Shart operatori   27.06.2020
// let num = 50;

// switch (num) {

//     case num > 49:
//         console.log('Noto"g"ri!');
//         break;
//         case 50:
//         console.log('Верно!');
//         break;
//     default:
//         console.log('Bunaqa jovob yo"q');
//         break;

// }

// 28.06.2020  Циклы
// let num = 50;
// while (num < 55) {
//     console.log(num);
//     num++;
// }

// do{
//     console.log(num);
//     num++;
// }
// while (num <55)

// for (let i = 1; i < 10; i++) {
//     if (i == 6) {
//         break;
//     }
//     console.log(i);
// }

// for (let i = 1; i < 6; i++) {
//     if (i == 4) {
//         continue;
//     }
//     console.log(i);
// }

// let x=5;
// console.log(x++); 
// Javobi x=5

// [] + false - null + true;  
// Javobi  null

/* let y = 1;
let x = y = 2;
alert(x); */
/* // Javobi null */

// [] + 1 + 2; /* // Javobi null */



// alert( "1"[0] );/* javobi 1 */

// 2 && 1 && null && 0 && undefined; /* null */

// alert( null || 2 && 3 || 4 ); /* Javob 3 */


// "ёжик" > "яблоко"; /* Javob yo'q. Chunki ikkalasi ham satr */

// 0 || "" || 2 || undefined || true || falsе; /* Javob null */


/* // 1 chi uyga vazifa

let time = prompt('Ваш бюджет на месяц', ''),
    money = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
    budget: money,
    timeDate: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
}

let a1 = prompt('Введите обязательную статью расходов в этом месяце', ''),
    a2 = prompt('Во сколько обойдется?', '');
    a3 = prompt('Введите обязательную статью расходов в этом месяце', ''),
    a4 = prompt('Во сколько обойдется?', '');

appData.expenses.a1 = a2;
appData.expenses.a3 = a4;

alert(appData.budget/30); */

// ****************************************************************************************

// let time = +prompt('Ваш бюджет на месяц', ''),
//     money = prompt('Введите дату в формате YYYY-MM-DD', '');

// let appData = {
//     budget: money,
//     expenses: {},
//     optionalExpenses: {},
//     income: [],
//     timeDate: time,
//     savings: false
// }

// for (let i = 0; i < 2; i++) {
//     let a = prompt('Введите обязательную статью расходов в этом месяце', '');
//     b = prompt('Во сколько обойдется?', '');


//     if ((typeof (a) === 'string') && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
//         console.log('done');
//         appData[a] = b;
//     } else {
//         i = i - 1;
//     }
// };
// appData.moneyPerDay = appData.budget / 30;

// alert('Ежедневный бюджет: ' + appDataPerDay);

// if (appData.moneyPerDay < 100) {
//     console.log('Минимальная уровень достатка');
// } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
//     console.log('Средний уровень достатка');
// } else if (appData.moneyPerDay > 2000) {
//     console.log('Высокий уровень достатка');
// }


// ***************************************************************************

// Функции 30.06.2020

// function firstNumber(text) {
//     alert(text);
// }
// firstNumber('Hello wordl');

// function calc(a, b) {
//     return a + b;
// }

// console.log(calc(5, 6));
// let calc =(a,b) => a+b;

// console.log(calc(5,10));

// function retVarNum() {
//     let anotherNum = 50;
//     return anotherNum;
// }
// let num = retVarNum();
// console.log(num);

// let str = 'text';
// console.log(str.length);
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// var num = '12.2px';
// // console.log(Math.round(num));
// console.log(parseInt(num));
// console.log(parseFloat(num));

//************************************************************************************ */
// ЗАДАНИЕ - 4
// let time, money;

// function start() {
//     money = +prompt('Ваш бюджет на месяц', '');
//     time = prompt('Введите дату в формате YYYY-MM-DD', '');
//     while (isNaN(money) || money == "" || money == null) {
//         money = +prompt('Ваш бюджет на месяц', '');
//     }
// }

// start();


// let appData = {
//     budget: money,
//     expenses: {},
//     optionalExpenses: {},
//     income: [],
//     timeDate: time,
//     savings: true
// }

// function chooseExpenses() {
//     for (let i = 0; i < 2; i++) {
//         let a = prompt('Введите обязательную статью расходов в этом месяце', '');
//         b = prompt('Во сколько обойдется?', '');


//         if ((typeof (a) === 'string') && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
//             console.log('done');
//             appData[a] = b;
//         } else {
//             i = i - 1;
//         }
//     };
// }
// chooseExpenses();

// appData.moneyPerDay = (appData.budget / 30).toFixed();

// alert('Ежедневный бюджет: ' + appData.moneyPerDay);

// if (appData.moneyPerDay < 100) {
//     console.log('Минимальная уровень достатка');
// } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
//     console.log('Средний уровень достатка');
// } else if (appData.moneyPerDay > 2000) {
//     console.log('Высокий уровень достатка');
// }


// function checkSavings() {
//     if (appData.savings == true) {
//         let save = +prompt('Какова сумма накоплений?'),
//             percent = +prompt('Под какой процент?');
//         appData.monthIncome = save/100/12*percent;
//         alert('Доход в месяц с вашего депозита '+appData.monthIncome);
//     }
// }

// checkSavings();
// */
/**************************************************************************************** */
//          Объекты

// let options = {
//     width: 1024,
//     height: 1024,
//     name: 'Test'
// };
// console.log(options.name);
// options.bool = true;
// console.log(options);
// options.colors = {
//     border: "red",
//     bg: "black"
// };
// delete options.height;
// console.log(options);

// for (let key in options){
//     console.log('Свойство '+ key + ' имеет значение ' + options[key]);
// }

// console.log(Object.keys(options).length);

/**************************************************************************************** */

//  Массивы

// let arr = [1, 2, 3, 4, 5];

// arr.pop(); // oxirgi elementni yo'q qiladi
// arr.push("5"); // oxiriga element qo'shadi
// arr.shift(); // birinchi elementni o'chiradi
// arr.unshift('1'); // birinchi elementga qo'shadi
// arr[99]=99;
// console.log(arr);
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// let arr = ['first', 2, 3, 'four', 5];
// arr.forEach(function (item, i, mass) {
//     console.log(i +': ' + item + ' (массив ' + mass + ')');
// });

// let arr = [1, 2, 3, 4, 5, 6, 7];
// // for(key in arr){      // bu ekranga chiqaradi massiv elementini tartib raqamaini
// //     console.log(key);
// // }
// for (key of arr) {    // bu ekranga chiqaradi faqat massiv elementini ozini
//     console.log(key);
// }

// let ans = prompt('', ''),
//     arr = [];
// arr = ans.split(',');   // foydalanuvchidan q/q gan 'string' ni massivga joylash
// console.log(arr);

// let arr = ['aaa', 'fff', 'ccc', 'ttt', 'ggg', 'qwerty', 'bbb'],
//     i = arr.join(',');  // o'zimiz tomondan kiritilgan massiv malumotlarni yigish va jonatish uchun
// console.log(i);

// let arr = ['ggg', 'ttt', 'aaa', 'fff', 'ccc',  'qwerty', 'bbb'],
//     i = arr.sort();  // ALILBO bo'yicha tartiblash uchun yozilgan kod
// console.log(i);

// Agar raqamlarni katta kichikligi bo'yicha tartiblash kere bo'sa
// let arr = [1, 5, 3, 4, 8, 10];

// console.log(arr.sort(compareNum));

// function compareNum(a, b) {
//     return a-b;
// }

// let ans = prompt('',''),
//     arr = [];

// arr = ans.split(',');
// console.log(arr);

// let arr = ['asdf', 'wert', 'poskdfgh'],
//     i = arr.join('/');
//     console.log(i);

//**************************02.07.2020**************************** */
// let soldier = {
//     health: 400,
//     armor: 100
// };

// let John = {
//     health: 100
// };
// John.__proto__ = soldier;
// console.log(John);
// console.log(John.armor);

let box = document.getElementById('box'),
    btn = document.getElementsByTagName('button'),
    heart = document.querySelectorAll('.heart'),
    oneHeart = document.querySelector('.heart');

// box.style.backgroundColor = 'green';
// for (let i = 0; i < heart.length; i++) {
//     heart[i].style.backgroundColor = 'black';
// }

// heart.forEach(function (item, i, hearts) {
//     item.style.backgroundColor = 'violet';
// });

// let div = document.createElement('div'),
//     text = document.createTextNode('Men shu yerdaman');

// console.log(div);
// console.log(text);

// div.classList.add('myDiv');
// console.log(div);

// document.body.appendChild(div);

// let myButton = document.createElement('button');

// myButton.classList.add('myButton');
// document.body.appendChild(myButton);


// $('.myButton').on('click', function () {
//     $('.myDiv').toggleClass('myToggle');
// });



let myDiv = document.createElement('div'),
    wrapper = document.querySelector('.wrapper'),
    button = document.createElement('button'),
    circle = document.getElementsByClassName('circle'),
    button2 = document.getElementsByTagName('button');

let wrap = document.getElementById('myWrapper');

wrap.style.backgroundColor = 'aqua';

myDiv.classList.add('myDiv');
button.classList.add('myButton');

wrapper.appendChild(button);
wrapper.appendChild(myDiv);

$('.myButton').on('click', function () {
    $('.myDiv').toggle('myToggle');
});


circle[0].style.backgroundColor = 'red';
circle[1].style.backgroundColor = 'yellow';
circle[2].style.backgroundColor = 'green';

//  wrapper.removeChild(circle[0]);

// document.body.replaceChild(btn[1], circle[1]);


let div2 = document.createElement('div');

div2.classList.add('div2');
//  div2.innerHTML='<h1>Hello world!</h1>';
div2.textContent = 'Hello World!';

btn[1].textContent = 'my button';



document.body.insertBefore(div2, wrapper);