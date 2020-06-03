'use strict';

let money, time;

function start() {
    money = +prompt('Ваш бюджет в месяц');

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt('Ваш бюджет в месяц');
    }
    
    time = prompt('Введите дату в формате YYYY-MM-DD');
}

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function chooseExpenses() {
    for(let i = 0; i < 2; i++) {
        let costItem = prompt('Введите обязательную статью расходов в этом месяце'),
            cost = prompt('Во сколько обойдется?');

        if(typeof(costItem)==='string' && typeof(costItem) != null && typeof(cost) != null && costItem != "" && cost != "" && costItem.length < 50) {
            console.log("done");
            appData.expenses[costItem] = cost;
        }else {
            console.log("Bad choose!")
            i--;
        }
    } 
}


function detectDayBudget() {
    appData.costPerDay = (appData.budget / 30).toFixed();

    alert(`Ваш бюджет в день составит ${appData.costPerDay}`); 
}

function detectLevel() {
    if (appData.costPerDay < 100) {
        console.log ("Это минимальный уровень достатка!");
    } else if (appData.costPerDay > 100 && appData.costPerDay < 2000) {
        console.log ("Это средний уровень достатка!");
    } else if (appData.costPerDay > 2000) {
        console.log ("Это высокий уровень достатка!");
    } else {
        console.log ("Произошла ошибка");
    } 
}

function checkSaving() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма Ваших накоплений?"),
            percent = +prompt("Под какой процент?");

        appData.mounthIncome = (save / 12 / 100 * percent).toFixed(2);
        alert(`Доход за месяц составит ${appData.mounthIncome}`);
    }
}

function chooseOptExpenses() {
    for (let i = 1; i <= 3; i++) {
        
        let expens = prompt("Статья необязательных расходов?");
        appData.optionalExpenses[i] = expens;
    }
}


chooseExpenses();
detectDayBudget();
detectLevel();
checkSaving();
chooseOptExpenses();