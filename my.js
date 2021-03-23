let money = +prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");

let AppData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
}

for (let i = 0; i < 1; i++){
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
	    b = prompt("Во сколько обойдется?", '');
    

    if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null &&
     a != '' && b != '' && a.length < 50) {
         console.log("done");
        AppData.expenses[a] = b;
    }else{
      console.log("No done");
      i--;
    }

};
//let i = 0;
//
//while (i < 2) {
//    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//     b = prompt("Во сколько обойдется?", '');
//    
//
//    if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null && a != '' && b != '' && a.length < 50){
//        console.log("Done");
//        AppData.expenses[a] = b;
//    }else {
//        console.log("No done");
//        i--;
//    }
//    i++;
//}
//do {
//    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//	    b = prompt("Во сколько обойдется?", '');
//        if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null &&
//            a != '' && b != '' && a.length < 50) {
//                console.log("done");
//               AppData.expenses[a] = b;
//           }else{
//             console.log("No done");
//             i--;
//           }
//       i++
//
//}
//while( i < 2);

AppData.moneyPerDay = AppData.budget/30;

alert("Ежедневный бюджет: " + AppData.moneyPerDay);

if(AppData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
}else if (AppData.moneyPerDay > 100 && AppData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
}else if (AppData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
}else {
    console.log("Произошла ошибка");
}