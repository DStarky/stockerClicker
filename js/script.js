// Variables

let playerName;
let iconsCount = 0;
let setsCount = 0;
let drawSpeed = 10;
let setSpeed = 20;
let incomePerIcons = 0.1;
let incomePerSet = 3;
let iconsIncome = 0;
let setsIncome = 0;
let total = 0;

// DOM-Elements

const icons = document.querySelector(".icons");
const sets = document.querySelector(".sets");
const incomeIcons = document.querySelector(".income-icons");
const incomeSets = document.querySelector(".income-sets");
const sum = document.querySelector(".sum");
const startButton = document.querySelector(".header__button");
const inputPlayerName = document.querySelector(".header__input");
const buttonPlayerName = document.querySelector(".header__enter");
const makeSetButton = document.querySelector(".game__button");

// Start values

icons.innerText = iconsCount;
sets.innerText = iconsCount;
incomeIcons.innerText = 0;
incomeSets.innerText = 0;
sum.innerText = 0.0;

// Functions

setInterval(() => {
  total += iconsIncome + setsIncome;
  sum.innerText = total.toFixed(1);
}, 1000);

const updateIcons = (addIcon) => {
  iconsCount += addIcon;
  icons.innerText = iconsCount;
  iconsIncome = iconsCount * incomePerIcons;
  incomeIcons.innerText = iconsIncome.toFixed(1);
};
const updateSets = (addSet) => {
  setsCount += addSet;
  sets.innerText = setsCount;
  setsIncome = setsCount * incomePerSet;
  incomeSets.innerText = setsIncome.toFixed(1);
};

startButton.onclick = () => {
  startButton.classList.add("header__button_start");
  setTimeout(() => {
    startButton.style.display = "none";
    buttonPlayerName.style.display = "inline-block";
    inputPlayerName.style.display = "inline-block";
  }, 500);
};

const setPlayerName = () => {
  playerName = inputPlayerName.value;
  console.log(playerName);
  buttonPlayerName.classList.add("header__enter_start");
  inputPlayerName.classList.add("header__input_start");
  setTimeout(() => {
    buttonPlayerName.style.display = "none";
    inputPlayerName.style.display = "none";
    document.querySelector(".header__welcome").style.display = "block";
    document.querySelector(
      ".header__welcome"
    ).innerHTML = `Welcome, <span style="font-weight: 700;">${playerName}<span>`;
    document.querySelector(".game").style.display = "block";
  }, 1000);
};

buttonPlayerName.onclick = setPlayerName;

inputPlayerName.onkeydown = (event) => {
  if (event.key == "Enter") {
    setPlayerName();
  }
};

document.querySelector(".game__draw").onmousemove = () => {
  let progress = document.querySelector(".game__draw-progress");
  progress.value += drawSpeed;
  if (progress.value == 100) {
    progress.value = 0;
    updateIcons(1);
  }
};

makeSetButton.onclick = () => {
  let progress = document.querySelector(".game__set-progress");
  if (iconsCount >= 20) {
    progress.value += setSpeed;
    if (progress.value == 100) {
      progress.value = 0;
      updateSets(1);
      updateIcons(-20);
    }
  } else {
    alert("Недостаточно иконок");
  }
};
