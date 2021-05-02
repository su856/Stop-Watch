let minute = document.getElementById("mins");
let second = document.getElementById("secs");
let start_button = document.getElementById("sta");
let stop_button = document.getElementById("st");
let reset_button = document.getElementById("res");

let timertime,timerminute;
timertime = 00;
timerminute=00;
let result;
stop_button.style.display='none';

function Start_stopwatch()
{
   result = setInterval(time_count,1000);
   stop_button.style.display='inline-block';
   start_button.style.display='none';
}
function Stop_stopwatch()
{
   clearInterval(result);
   stop_button.style.display='none';
   start_button.style.display='inline-block';
}
function Reset_Stopwatch()
{
   Stop_stopwatch();
   timertime = 00;
   timerminute = 00;
   minute.innerText = '00';
   second.innerText='00';
}

function time_count(){
 timertime++;
 if(timertime>59){
     timerminute++;
     minute.innerText=(timerminute<10)?`0${timerminute}`:timerminute;
     timertime=00;
 }
 second.innerText=(timertime<10)?`0${timertime}`:timertime;
}

start_button.addEventListener('click',Start_stopwatch);
stop_button.addEventListener('click',Stop_stopwatch);
reset_button.addEventListener('click',Reset_Stopwatch);