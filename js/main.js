let startResult = document.getElementById("start"),
  budgetValue = document.querySelector(".budget-value"),
  dayBudgetValue = document.querySelector(".daybudget-value"),
  levelValue = document.querySelector(".level-value"),
  expensesValue = document.querySelector(".expenses-value"),
  incomeValue = document.querySelector(".income-value"),
  optionalExpensesValue = document.querySelector(".optionalexpenses-value"),
  monthSavingsValue = document.querySelector(".monthsavings-value"),
  yearSavingsValue = document.querySelector(".yearsavings-value"),
  expensesItem = document.querySelectorAll(".expenses-item"),
  expensesItemBtn = document.getElementsByTagName("button")[0],
  optionalExpensesBtn = document.getElementsByTagName("button")[1],
  countBudgetBtn = document.getElementsByTagName("button")[2],
  optionalExpensesItem = document.querySelectorAll(".optionalexpenses-item"),
  chooseIncome = document.querySelector(".choose-income"),
  checkSavings = document.querySelector("#savings"),
  chooseSum = document.querySelector(".choose-sum"),
  choosePercent = document.querySelector(".choose-percent"),
  yearValue = document.querySelector(".year-value"),
  monthValue = document.querySelector(".month-value"),
  dayValue = document.querySelector(".day-value");

let money, time;
startResult.addEventListener("click", function () {
  time = prompt("Введите дату в формате YYYY-MM-DD");
  money = +prompt("Ваш бюджет на месяц?");

  while (isNaN(money) || money == "" || money == null) {
    money = +prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD");
  }
  AppData.budget = money;
  AppData.timeData = time;
  budgetValue.textContent = money.toFixed();
  yearValue.value = new Date(Date.parse(time)).getFullYear();
  monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
  dayValue.value = new Date(Date.parse(time)).getDate();
});

expensesItemBtn.addEventListener("click", function () {
  let sum = 0;
  for (let i = 0; i < expensesItem.length; i++) {
    let a = expensesItem[i].value,
      b = expensesItem[++i].value;

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
      sum += +b;
    } else {
      console.log("No done");
      i--;
    }
  }
  expensesValue.textContent = sum;
});

optionalExpensesBtn.addEventListener("click", function () {
  for (let i = 0; i < optionalExpensesItem.length; i++) {
    let questionOptExpenses = optionalExpensesItem[i].value;
    AppData.optionalExpenses[i] = questionOptExpenses;
    optionalExpensesValue.textContent += AppData.optionalExpenses[i] + "";
    console.log(AppData.optionalExpenses);
  }
});

countBudgetBtn.addEventListener("click", function () {
  if (AppData.budget != undefined) {
    AppData.moneyPerDay = (
      (AppData.budget- +expensesValue.textContent) / 30
    ).toFixed();
    dayBudgetValue.textContent = AppData.moneyPerDay;

    if (AppData.moneyPerDay < 1000) {
      levelValue.textContent = "Минимальный уровень достатка";
    } else if (AppData.moneyPerDay > 1000 && AppData.moneyPerDay < 5000) {
      levelValue.textContent = "Средний уровень достатка";
    } else if (AppData.moneyPerDay > 5000) {
      levelValue.textContent = "Высокий уровень достатка";
    } else {
      levelValue.textContent = "Произошла ошибка";
    }
  } else {
    dayBudgetValue.textContent = "Произошла ошибка";
  }
});

chooseIncome.addEventListener("input", function () {
  for (let i = 0; i < 1; i++) {
    let items = chooseIncome.value;

    if (items !== "" && typeof items != null && typeof items === "string") {
      console.log("done");
      AppData.income = items.split(",");
      incomeValue.textContent = AppData.income;
    } else {
      console.log("No done");
      i--;
      for (let key in AppData) {
        console.log(
          "Наша программа включает в себя такие данные:" + key + AppData[key]
        );
      }
    }
  }
});

checkSavings.addEventListener("click", function () {
  if (AppData.savings == true) {
    AppData.savings = false;
  } else {
    AppData.savings = true;
  }
});

chooseSum.addEventListener("input", function () {
  if (AppData.savings == true) {
    let sum = +chooseSum.value,
    percent = +choosePercent.value;
  AppData.monthIncome = (sum / 100 / 12) * percent;
  AppData.yearIncome = (sum / 100) * percent;

  monthSavingsValue.textContent = AppData.monthIncome.toFixed(1);
  yearSavingsValue.textContent = AppData.yearIncome.toFixed(1);
  }
});

choosePercent.addEventListener("input", function () {
  if (AppData.savings == true) {
    let sum = +chooseSum.value,
      percent = +choosePercent.value;
    AppData.monthIncome = (sum / 100 / 12) * percent;
    AppData.yearIncome = (sum / 100) * percent;

    monthSavingsValue.textContent = AppData.monthIncome.toFixed(1);
    yearSavingsValue.textContent = AppData.yearIncome.toFixed(1);
  }
});

const AppData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false,
};
