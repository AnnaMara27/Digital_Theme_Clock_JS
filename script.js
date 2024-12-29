const body = document.querySelector("body");
const darkBtn = document.querySelector(".fa-moon");
const lightBtn = document.querySelector(".fa-sun");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const amPm = document.getElementById("am-pm");
const day = document.getElementById("day");
const month = document.getElementById("month");
const date = document.getElementById("date");

// GETTING THE TIME AND DATE DATAs
const current = new Date();
const currentHour = current.getHours();
const currentMinute = current.getMinutes();
const currentSecond = current.getSeconds();

// SETTING PM/AM
amPm.innerText = currentHour >= 12 ? "PM" : "AM";

//SETTING HOURS IN PM/AM MODE
hours.innerText =
  currentHour >= 13 && currentHour < 24
    ? `${currentHour - 12}`
    : `${currentHour}`;

// SETTING MIDNIGHT AND NOON
if (currentHour == 0) {
  hours.innerText = "0";
} else if (currentHour == 12) {
  hours.innerText = "12";
}

// SETTING DAY OF THE WEEK
const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const currentDay = weekDays[current.getDay()];
day.innerText = `${currentDay}`;

// SETTING MONTH AND DATE
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const currentMonth = months[current.getMonth()];
month.innerText = `${currentMonth}`;
const currentDate = current.getDate();
date.innerText = `${currentDate}`;

// EVENT LISTENERS
darkBtn.addEventListener("click", () => {
  body.classList.add("dark");
  darkBtn.classList.add("hidden");
  lightBtn.classList.remove("hidden");
});

lightBtn.addEventListener("click", () => {
  body.classList.remove("dark");
  darkBtn.classList.remove("hidden");
  lightBtn.classList.add("hidden");
});
