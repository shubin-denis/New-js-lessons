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
    savings: true,

    chooseExpenses: function() {
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
    },

    detectDayBudget: function() {
        appData.costPerDay = (appData.budget / 30).toFixed();
    
        alert(`Ваш бюджет в день составит ${appData.costPerDay}`); 
    },

    detectLevel: function detectLevel() {
        if (appData.costPerDay < 100) {
            console.log ("Это минимальный уровень достатка!");
        } else if (appData.costPerDay > 100 && appData.costPerDay < 2000) {
            console.log ("Это средний уровень достатка!");
        } else if (appData.costPerDay > 2000) {
            console.log ("Это высокий уровень достатка!");
        } else {
            console.log ("Произошла ошибка");
        } 
    },

    checkSaving: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма Ваших накоплений?"),
                percent = +prompt("Под какой процент?");
    
            appData.mounthIncome = (save / 12 / 100 * percent).toFixed(2);
            alert(`Доход за месяц составит ${appData.mounthIncome}`);
        }
    },

    chooseOptExpenses: function() {
        for (let i = 1; i <= 3; i++) {
            
            let expens = prompt("Статья необязательных расходов?");
            appData.optionalExpenses[i] = expens;
        }
    },

    chooseIncome: function() {
        let userAnswer = prompt('Что принесет дополнительный доход? (Перечислите через запятую)');

        while(!isNaN(userAnswer) || userAnswer == '' || userAnswer == null) {
            userAnswer = prompt('Что принесет дополнительный доход? (Перечислите через запятую)');
        }

        appData.income = userAnswer.split(', ');
        appData.income.push(prompt('Может что-то еще?'));
        appData.income.sort();

        appData.income.forEach(function (item, i) {
            alert(`Способы доп. заработка: ${i+1} ${item}`);
        });
    }
};

for (let key in appData) {
    console.log(`Наша программа включает в себя данные: ${key}`);
}