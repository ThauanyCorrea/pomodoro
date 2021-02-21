const pomodoro = document.querySelector('.pomodoro');

let secondsDuration;
let timer;
const mySound = new Audio("img/alert.mp3");

function addZero(time) {
    return time < 10 ? `0${time}` : time
}

function createSeconds(secondsDuration) {
    const seconds = secondsDuration % 60;
    const minutes = parseInt(secondsDuration / 60);

    return `${addZero(minutes)}:${addZero(seconds)}`;
}

function initTimer() {
    timer = setInterval(function () {
        secondsDuration--;
        pomodoro.innerHTML = createSeconds(secondsDuration);

        if (secondsDuration == 0) {
            mySound.play();
            clearInterval(timer);
        }
    }, 1000);
}

document.addEventListener('click', function (e) {
    const el = e.target;

    if (el.classList.contains('start')) {
        clearInterval(timer);
        initTimer();
        secondsDuration = 1500;
    }

    if (el.classList.contains('start-rest')) {
        clearInterval(timer);
        initTimer();
        secondsDuration = 300;
    }

    if (el.classList.contains('reset')) {
        clearInterval(timer);
        pomodoro.innerHTML = '25:00';
        secondsDuration = 1500;
    }

    if (el.classList.contains('reset-rest')) {
        clearInterval(timer);
        pomodoro.innerHTML = '5:00';
        secondsDuration = 300;
    }
});
