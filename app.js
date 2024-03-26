var timer = document.querySelector(".timer");
var ms = document.querySelector(".ms");
var sec = document.querySelector(".sec");
var min = document.querySelector(".min");
var startBtn = document.querySelector(".startBtn");
var flagBtn = document.querySelector(".flagBtn");
var resetBtn = document.querySelector(".resetBtn");
var flafList = document.querySelector(".flagList");
var flagListInnerHtml = ``;
var isTimerOn = false;
var currMs = 0;
var currSec = 0;
var currMin = 0;
var IntervalFunctionOfMs;
var IntervalFunctionOfSec;
var IntervalFunctionOfMin;
startBtn.addEventListener("click", () => {
    if (isTimerOn) {
        startBtn.innerHTML = `<i class="fa-solid fa-play"></i>`;
        isTimerOn = false;
        pauseTimer();
    }
    else {
        startBtn.innerHTML = `<i class="fa-solid fa-pause"></i>`;
        isTimerOn = true;
        startTimer();
    }
});

flagBtn.addEventListener("click", ()=>{
    if(isTimerOn){
    if(currSec%60 < 10)
    flagListInnerHtml = `<li class="f">0${currMin}:0${currSec%60}:${currMs%10}</li>` + flagListInnerHtml;
    else
    flagListInnerHtml = `<li class="f">0${currMin}:${currSec%60}:${currMs%10}</li>` + flagListInnerHtml;
    flafList.innerHTML = flagListInnerHtml;
    }
});

resetBtn.addEventListener("click", ()=>{
    reset();
});

function startTimer() {
    
    IntervalFunctionOfMs = setInterval(() => {
        currMs = currMs + 1;
        ms.textContent = currMs % 10;
    }, 100);
    IntervalFunctionOfSec = setInterval(() => {
        currSec = currSec + 1;
        if (currSec % 60 < 10) sec.textContent = `0${currSec % 60}`;
        else sec.textContent = currSec % 60;
    }, 1000);
    IntervalFunctionOfMin = setInterval(() => {
        currMin = currMin + 1;
        if (currMin % 60 < 10) min.textContent = `0${currMin % 60}`;
        else min.textContent = currMin % 60;
    }, 60000);
}

function pauseTimer() {
    clearInterval(IntervalFunctionOfMs);
    clearInterval(IntervalFunctionOfSec);
    clearInterval(IntervalFunctionOfMin);
}

function reset(){
    currMs = 0;
    currSec = 0;
    currMin = 0;
    pauseTimer();
    flagListInnerHtml = ``;
    flafList.innerHTML = ``;
    ms.textContent = 0;
    sec.textContent = "00";
    min.textContent = "00";
    startBtn.innerHTML = `<i class="fa-solid fa-play"></i>`;
    isTimerOn =false;
}