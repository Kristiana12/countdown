const labelDays = document.querySelector('.days');
const labelHours = document.querySelector('.hours');
const labelMinutes = document.querySelector('.minutes');
const labelSeconds = document.querySelector('.seconds');

//Calc how many days left
const calcTimeLeft = () => {
  const futureDate = new Date('January 1, 2023 00:00:00').getTime();
  const today = new Date().getTime();

  //Get how many milliseconds left
  const millisecondsLeft = futureDate - today;

  //How time works
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24; //milliseconds

  //Calculate time left
  const calcDays = Math.floor(millisecondsLeft / day);
  const calcHours = Math.floor((millisecondsLeft % day) / hour);
  const calcMinutes = Math.floor((millisecondsLeft % hour) / minute);
  const calcSeconds = Math.floor((millisecondsLeft % minute) / second);

  //Update UI
  labelDays.textContent = calcDays;
  labelHours.textContent = calcHours.toString().padStart(2, '0');
  labelMinutes.textContent = calcMinutes.toString().padStart(2, '0');
  labelSeconds.textContent = calcSeconds.toString().padStart(2, '0');
};

setInterval(calcTimeLeft, 1000);
