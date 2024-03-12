var startTime;
var isRunning = false;

function startStopwatch() {
    if (!isRunning) {
        startTime = new Date().getTime();
        isRunning = true;
        updateStopwatch();
    }
}

function stopStopwatch() {
    isRunning = false;
}

function resetStopwatch() {
    isRunning = false;
    updateDisplay(0);
}

function updateStopwatch() {
    if (isRunning) {
        var currentTime = new Date().getTime();
        var elapsedTime = currentTime - startTime;
        updateDisplay(elapsedTime);
        setTimeout(updateStopwatch, 1000);
    }
}

function updateDisplay(elapsedTime) {
    var seconds = Math.floor(elapsedTime / 1000);
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(minutes / 60);

    seconds %= 60;
    minutes %= 60;

    seconds = seconds < 10 ? "0" + seconds : seconds;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    hours = hours < 10 ? "0" + hours : hours;

    var timeString = hours + ":" + minutes + ":" + seconds;
    document.getElementById("timeDisplay").innerText = timeString;
}
