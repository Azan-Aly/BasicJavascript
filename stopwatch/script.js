const displays = document.getElementById("display")

let starttime = 0;
let elapsedtime = 0;
let isrunning = false;
let timer = null;

function start() {

    if (!isrunning) {
        starttime = Date.now() - elapsedtime;
        timer = setInterval(update, 10);
        isrunning = true;
        
    }
}

function stop() {

    if (isrunning) {
        clearInterval(timer);
        elapsedtime = Date.now() - starttime;
        isrunning = false;
    }
}
function reset() {

    clearInterval(timer);
     starttime = 0;
     elapsedtime = 0;
     isrunning = false;
     displays.textContent = "00:00:00:00"


}

function update() {

    const currtime = Date.now();
    elapsedtime = currtime - starttime;

    let hours = Math.floor(elapsedtime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedtime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedtime / 1000 % 60);
    let miliseconds = Math.floor(elapsedtime % 1000 / 10);

    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');
    miliseconds = String(miliseconds).padStart(2, '0');

    displays.textContent == `${hours}:${minutes}:${seconds}:${miliseconds}`;
}
