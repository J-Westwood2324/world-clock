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
}

updateIndexTime();
setInterval(updateIndexTime, 1000);
