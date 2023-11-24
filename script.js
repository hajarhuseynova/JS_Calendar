const box = document.querySelector(".box");
const left = document.getElementById("left");
const right = document.getElementById("right");
const monthElement = document.querySelector(".month");
const special = document.querySelector(".special");

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const daysInMonth = {
  January: 31,
  February: 28,
  March: 31,
  April: 30,
  May: 31,
  June: 30,
  July: 31,
  August: 31,
  September: 30,
  October: 31,
  November: 30,
  December: 31,
};

function updateMonthDays(month, days) {
  special.innerHTML = month;
  monthElement.innerHTML = "";
  for (let i = 1; i <= days; i++) {
    const dayElement = document.createElement("p");
    dayElement.classList.add("monthday");
    dayElement.textContent = i;
    monthElement.appendChild(dayElement);
  }
}

let currentMonthIndex = months.indexOf("January");

right.addEventListener("click", function () {
  currentMonthIndex = (currentMonthIndex + 1) % months.length;
  const nextMonth = months[currentMonthIndex];
  updateMonthDays(nextMonth, daysInMonth[nextMonth]);
});

left.addEventListener("click", function () {
  currentMonthIndex = (currentMonthIndex - 1 + months.length) % months.length;
  const previousMonth = months[currentMonthIndex];
  updateMonthDays(previousMonth, daysInMonth[previousMonth]);
});

updateMonthDays("January", 31);
