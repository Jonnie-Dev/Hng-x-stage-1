const day = document.querySelector("[data-testid='currentDayOfTheWeek']");

const time = document.querySelector('[data-testid="currentUTCTime"');

function updateTimeDate() {
  let today = new Date();
  let todayDate = today.toLocaleString("en-us", { weekday: "long" });
  let utcTime = today.getTime();

  day.textContent = todayDate;
  time.textContent = utcTime;
}

updateTimeDate(); // Updates the date and time on initial render

setInterval(updateTimeDate, 1000); // keep calling the function (to update the date and time) every 1000millisecond which is equivalent to 1 second
