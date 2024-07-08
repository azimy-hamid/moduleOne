let numberOfSeconds = document.getElementById("secondsInput");

let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let submitButton = document.getElementById("submitButton");

submitButton.addEventListener("click", () => {
  let numberOfSecondsValue = numberOfSeconds.value;
  console.log(numberOfSecondsValue);

  calculateHours = Math.floor(numberOfSecondsValue / 3600);
  calculateMinutes = Math.floor((numberOfSecondsValue % 3600) / 60);
  calculateSeconds = Math.floor((numberOfSecondsValue % 3600) % 60);

  hours.textContent = calculateHours;
  minutes.textContent = calculateMinutes;
  seconds.textContent = calculateSeconds;
});
