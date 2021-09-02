/* eslint-disable no-unused-vars */
/* eslint no-undef: 0 */
show = (section) => {
  const toshow = document.getElementById(section.id);
  toshow.classList.replace('invisible', 'visible');
  for (let i = 1; i <= 3; i += 1) {
    if (`s${String(i)}` !== section.id) {
      document.getElementById(`s${String(i)}`).classList.replace('visible', 'invisible');
    }
  }
};

const Time = () => {
  const luxonTime = luxon.DateTime.now();
  currentTime.innerHTML = luxonTime.toLocaleString(luxon.DateTime.DATETIME_MED);
};

const myTime = setInterval(Time, 1000);
