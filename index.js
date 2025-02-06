let hrsEl = document.getElementById("hrs");
let minEl = document.getElementById("min");
let secEl = document.getElementById("sec");

setInterval(function () {
  let currentTime = new Date();

  hrsEl.textContent = (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
  minEl.textContent = (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
  secEl.textContent = (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();
},1000);
