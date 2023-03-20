const weekDay = document.getElementById("week-day");
const month = document.getElementById("month");
const monthDate = document.getElementById("month-date");
const year = document.getElementById("year");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const format = document.getElementById("format");

const updateDate = () => {
  const date = new Date();
  const dayList = ["Sunday", "Monday", "Tueday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const monthList = [
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
  //  set date and month
  monthDate.innerText =
    date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  month.innerText = monthList[date.getMonth()];
  year.innerText = date.getFullYear();
  weekDay.innerText = dayList[date.getDay()];
  // set time
  hours.innerText =
    date.getHours() > 12 ? (date.getHours() - 12) >= 10 ? date.getHours() - 12 : `0${date.getHours() - 12}`  : date.getHours();
  minutes.innerText =
    date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  seconds.innerText =
    date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();
  format.innerText = date.getHours() >= 12 ? "PM" : "AM";
};

setInterval(() => {
  updateDate();
}, 1000);
