function updateIndexTime() {
  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");
  let parisTime = moment().tz("Europe/Paris");
  parisDateElement.innerHTML = parisTime.format("Do MMMM YYYY");
  parisTimeElement.innerHTML = parisTime.format("LTS");

  let moscowElement = document.querySelector("#moscow");
  let moscowDateElement = moscowElement.querySelector(".date");
  let moscowTimeElement = moscowElement.querySelector(".time");
  let moscowTime = moment().tz("Europe/Moscow");
  moscowDateElement.innerHTML = moscowTime.format("Do MMMM YYYY");
  moscowTimeElement.innerHTML = moscowTime.format("LTS");

  let cancunElement = document.querySelector("#cancun");
  let cancunDateElement = cancunElement.querySelector(".date");
  let cancunTimeElement = cancunElement.querySelector(".time");
  let cancunTime = moment().tz("America/Cancun");
  cancunDateElement.innerHTML = cancunTime.format("Do MMMM YYYY");
  cancunTimeElement.innerHTML = cancunTime.format("LTS");
}

function cityTimeChange(event) {
  let timeZone = event.target.value;
  if (timeZone === "current") {
    timeZone = moment.tz.guess();
  }
  let cityTimeZone = moment().tz(timeZone);
  let cityName = timeZone.replace("_", " ").split("/")[1];
  let worldClock = document.querySelector("#indexCities");
  worldClock.innerHTML = `
         <div class="city">
          <h2>${cityName}</h2>
          <div class="date">${cityTimeZone.format("Do MMMM YYYY")}</div>
          <div class="time">${cityTimeZone.format("LTS")}</div>
          <a href="index.html"> Homepage </a>`;
  setTimeout(() => {
    cityTimeChange(event);
  }, 1000);
}

updateIndexTime();
setInterval(updateIndexTime, 1000);

let selectElement = document.querySelector("#cities");
selectElement.addEventListener("change", cityTimeChange);
