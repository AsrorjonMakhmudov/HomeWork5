// // Задания - 5
// let time, money;

// function start() {
// 	money = +prompt('Ваш бюджет на месяц', '');
// 	time = prompt('Введите дату в формате YYYY-MM-DD', '');
// 	while (isNaN(money) || money == "" || money == null) {
// 		money = +prompt('Ваш бюджет на месяц', '');
// 	}
// }

// start();


// let appData = {
// 	budget: money,
// 	expenses: {},
// 	optionalExpenses: {},
// 	income: [],
// 	timeDate: time,
// 	savings: true,
// 	chooseExpenses: function () {
// 		for (let i = 0; i < 2; i++) {
// 			let a = prompt('Введите обязательную статью расходов в этом месяце', '');
// 			b = prompt('Во сколько обойдется?', '');


// 			if ((typeof (a) === 'string') && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
// 				console.log('done');
// 				appData[a] = b;
// 			} else {
// 				i = i - 1;
// 			}
// 		};
// 	},
// 	detectDayBudget: function () {
// 		appData.moneyPerDay = (appData.budget / 30).toFixed();
// 		alert('Ежедневный бюджет: ' + appData.moneyPerDay);
// 	},
// 	detectLevel: function () {
// 		if (appData.moneyPerDay < 100) {
// 			console.log('Минимальная уровень достатка');
// 		} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
// 			console.log('Средний уровень достатка');
// 		} else if (appData.moneyPerDay > 2000) {
// 			console.log('Высокий уровень достатка');
// 		}
// 	},
// 	checkSavings: function () {
// 		if (appData.savings == true) {
// 			let save = +prompt('Какова сумма накоплений?'),
// 				percent = +prompt('Под какой процент?');
// 			appData.monthIncome = save / 100 / 12 * percent;
// 			alert('Доход в месяц с вашего депозита ' + appData.monthIncome);
// 		}
// 	},
// 	chooseIncome: function () {
// 		let items = prompt('Что принесет дополнытельный доход? (Перечислите через запятую)', '');
// 		appData.income = items.split(', ');
// 		appData.income.push(prompt('Может что то ещё?'));
// 		appData.income.sort();
// 	}
// };





 