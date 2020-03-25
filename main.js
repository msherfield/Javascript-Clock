var time = new Date();
console.log(time.getHours() % 12);
console.log(time.getMinutes());
console.log(time.getSeconds());

var clock = document.getElementById('clock');
var hexColor = document.getElementById('hex-color');

function hexClock() {
    var time = new Date();
    var hours = (time.getHours() % 12).toString();
    var mintues = time.getMinutes().toString();
    var seconds = time.getSeconds().toString();

    if (hours.length < 2) {
        hours = '0' + hours;
    }

    if (mintues.length < 2) {
        mintues = '0' + mintues;
    }

    if (seconds.length < 2) {
        seconds = '0' + seconds;
    }

    var clockStr = hours + ' : ' + minutes + ' . ' + seconds;
    var hexColorStr = '#' + hours + minutes + seconds;

    clock.textContent = clockStr;
    hexColor.textContent = hexColorStr;

    document.body.style.backgroundColor = hexColorStr;
}

hexClock();
setInterval(hexClock, 1000);