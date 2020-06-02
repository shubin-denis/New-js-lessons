'use strict';

let money = +prompt('Ваш бюджет в месяц'),
    time = prompt('Введите дату в формате YYYY-MM-DD');

let appData = {
    budget: money,
    timeData: time,
    // 1) Можно организовать объект таким способом, внося имена переменных и их значения
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
}

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


// let i = 0;

// while(i < 2) {
//     let costItem = prompt('Введите первую обязательную статью расходов в этом месяце'),
//         cost = +prompt('Во сколько обойдется?');

//     if(typeof(costItem)==='string' && typeof(costItem) != null && typeof(cost) != null && costItem != "" && cost != "" && costItem.length < 50) {
//         console.log("done");
//         appData.expenses[costItem] = cost;
//         i++;
//     }else {
//         console.log("Bad choose!")
//         i--;
//     }
// }

// do {
//    let costItem = prompt('Введите первую обязательную статью расходов в этом месяце'),
//         cost = +prompt('Во сколько обойдется?');

//     if(typeof(costItem)==='string' && typeof(costItem) != null && typeof(cost) != null && costItem != "" && cost != "" && costItem.length < 50) {
//         console.log("done");
//         appData.expenses[costItem] = cost;
//         i++;
//     }else {
//         console.log("Bad choose!")
//         i--;
//     } 
// }while(i <= 1)

appData.costPerDay = appData.budget / 30;

alert(`Ваш бюджет в день составит ${appData.costPerDay}`);

if (appData.costPerDay < 100) {
    console.log ("Это минимальный уровень достатка!");
} else if (appData.costPerDay > 100 && appData.costPerDay < 2000) {
    console.log ("Это средний уровень достатка!");
} else if (appData.costPerDay > 2000) {
    console.log ("Это высокий уровень достатка!");
} else {
    console.log ("Произошла ошибка");
}
