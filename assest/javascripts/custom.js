document.addEventListener("DOMContentLoaded", function () {
    var myModal = new bootstrap.Modal(document.getElementById("modal"), {
        keyboard: false
    });
    myModal.show();
});

var countDownDate = new Date();
countDownDate.setHours(18, 0, 0); // Set the countdown time to 24:00:00

var x = setInterval(() => {
    var now = new Date().getTime();

    var distance = countDownDate.getTime() - now;

    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("hours-first").innerHTML = Math.floor(hours / 10);
    document.getElementById("hours-second").innerHTML = hours % 10;
    document.getElementById("minutes-first").innerHTML = Math.floor(minutes / 10);
    document.getElementById("minutes-second").innerHTML = minutes % 10;
    document.getElementById("seconds-first").innerHTML = Math.floor(seconds / 10);
    document.getElementById("seconds-second").innerHTML = seconds % 10;

    if (distance <= 0) {
        clearInterval(x);
        document.getElementById("hours-first").innerHTML = "0";
        document.getElementById("hours-second").innerHTML = "0";
        document.getElementById("minutes-first").innerHTML = "0";
        document.getElementById("minutes-second").innerHTML = "0";
        document.getElementById("seconds-first").innerHTML = "0";
        document.getElementById("seconds-second").innerHTML = "0";
    }
}, 1000);