let money, time;

function start() {
  money = +prompt("Ваш бюджет на месяц?");
  time = prompt("Введите дату в формате YYYY-MM-DD");

  while (isNaN(money) || money == "" || money == null) {
    money = +prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD");
  }
}
start();

let AppData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: true,
  chooseExpenses: function () {
    for (let i = 0; i < 1; i++) {
      let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt("Во сколько обойдется?", "");

      if (
        typeof a === "string" &&
        typeof a != null &&
        typeof b != null &&
        a != "" &&
        b != "" &&
        a.length < 50
      ) {
        console.log("done");
        AppData.expenses[a] = b;
      } else {
        console.log("No done");
        i--;
      }
    }
  },
  detectDayBudget: function () {
    AppData.moneyPerDay = (AppData.budget / 30).toFixed();
    alert("Ежедневный бюджет: " + AppData.moneyPerDay);
  },
  detectLevel: function () {
    if (AppData.moneyPerDay < 100) {
      console.log("Минимальный уровень достатка");
    } else if (AppData.moneyPerDay > 100 && AppData.moneyPerDay < 2000) {
      console.log("Средний уровень достатка");
    } else if (AppData.moneyPerDay > 2000) {
      console.log("Высокий уровень достатка");
    } else {
      console.log("Произошла ошибка");
    }
  },
  checkSavings: function () {
    if (AppData.savings === true) {
      let save = +prompt("Каковы сумма накоплений?"),
        percent = +prompt("Под какой процент?");

      AppData.monthIncome = (save / 100 / 12) * percent;
      alert("Доход в месяц с вашего дипозита:" + AppData.monthIncome);
    }
  },
  chooseOptExpenses: function () {
    for (let i = 1; i <= 3; i++) {
      let questionOptExpenses = prompt("Статья необязательных расходов?");
      AppData.optionalExpenses[i] = questionOptExpenses;
      console.log(AppData.optionalExpenses);
    }
  },
  chooseIncome: function () {
    for (let i = 0; i < 1; i++) {
      let items = prompt("Что принесёт доп.доход?(перечислите через запятую)");
      if (items !== "" && typeof items != null && typeof items === "string") {
        let another = prompt("Может есть ещё какие-то доп.доходы?");
        console.log("done");
        AppData.income = items.split(",");
        AppData.income.push(another);
        AppData.income.sort();
      } else {
        console.log("No done");
        i--;
      }
    }
    AppData.income.forEach(function (itemmassive, i) {
      alert("Способы доп. заработка: " + (i + 1) + " - " + itemmassive);
    });
    for (let key in AppData) {
      console.log(
        "Наша программа включает в себя такие данные:" + key + AppData[key]
      );
    }
  },
};
