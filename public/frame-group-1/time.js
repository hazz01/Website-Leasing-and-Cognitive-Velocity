let timeStart = 60; // Time Start
function startTimer(duration, display) {
  var timer = duration;
  var minutes, seconds;
  let warning = timeStart;
  var ok = false;
  var form = document.forms.exam;

  var t = setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (timer <= warning && !ok) {
      alert("Time Is Running");
      ok = true;
    }

    if (--timer <= 0) {
      timer = duration;

      if (!isNaN(t)) clearInterval(t);

      window.location.href = "end.html";
      form.submit();
    }
  }, 1000);
}

window.onload = function () {
  var time = timeStart, // your time in seconds here
    display = document.querySelector("#TimerDisplay");
  startTimer(time, display);
};
