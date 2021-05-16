const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];


const refs = {
  startBtn: document.querySelector('[data-action = "start"]'),
  stopBtn: document.querySelector('[data-action = "stop"]'),
  htmlBody: document.querySelector("body"),
  intervalColorId: null,
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

refs.startBtn.addEventListener("click", () => {
  refs.stopBtn.removeAttribute("disabled");
  refs.startBtn.setAttribute("disabled", true);
  refs.intervalColorId = setInterval(() => {
    refs.htmlBody.style.backgroundColor =
      colors[randomIntegerFromInterval(0, colors.length - 1)];
  }, 1000);
});

refs.stopBtn.addEventListener("click", () => {
  refs.startBtn.removeAttribute("disabled");
  refs.stopBtn.setAttribute("disabled", true);
  clearInterval(refs.intervalColorId);
});