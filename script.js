const box = document.querySelector(".box");
const left = document.getElementById("left");
const right = document.getElementById("right");
const monthElement = document.querySelector(".month");
const special = document.querySelector(".special");
const weekday = document.querySelector(".weekdayP");
const monthDay = document.querySelector(".monthDay");
const eventDetails = document.getElementById("eventDetails");
const cardBlack = document.querySelector(".card-black");

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

const events = [
  {
    day: 5,
    weekday: "Thursday",
    month: "January",
    type: "Republic",
    name: "Republic Day",
    color: "blue",
  },
  {
    day: 15,
    weekday: "Sunday",
    month: "January",
    type: "Public",
    name: "Qurban bayrami",
    color: "orange",
  },
  {
    day: 7,
    weekday: "Saturday",
    month: "February",
    type: "Public",
    name: "Qurban bayrami",
    color: "orange",
  },
  {
    day: 15,
    weekday: "Sunday",
    month: "February",
    type: "Republic",
    name: "Bayram",
    color: "blue",
  },
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
    const event = events.find((e) => e.day === i && e.month === month);
    if (event) {
      const circle = document.createElement("div");
      circle.classList.add("color", event.color);
      dayElement.appendChild(circle);

      dayElement.addEventListener("click", function () {
        displayEventDetails(event);
      });
    }

    monthElement.appendChild(dayElement);
  }
}

function displayEventDetails(event) {
  monthDay.textContent = event.month + ", " + event.day;
  weekday.textContent = event.weekday;
  cardBlack.style.display = "block";
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
