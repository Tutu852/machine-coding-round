//IIFI will help we out for secure the data it help us to secure private information 
(function(){
    var  hour = document.querySelector(".hour");
    var  min  = document.querySelector(".min");
    var  sec  = document.querySelector(".sec");

    var startBtn =document.querySelector(".start");
    var stopBtn = document.querySelector(".stop");
    var resetBtn = document.querySelector(".reset");

    var countDownTimer = null;

    startBtn.addEventListener('click',function(){
        if(hour.value == 0 && min.value == 0 && sec.value == 0) return ; 
        //this fucntion wiill change start to stop when we click that but we need something in timer
        function startInterval(){
            startBtn.style.display="none";
            stopBtn.style.display="initial";
            //i started the counter
            countDownTimer = setInterval(() => {
                timer();
            }, 1000);
        }
        startInterval();
    })

    function stopInterval(state){
        startBtn.innerHTML = state === "pause" ? "Continue" : "Start";
        startBtn.style.display="initial";
        stopBtn.style.display="none";
        clearInterval(countDownTimer);

    }
    function timer(){
        if(sec.value > 60){
            min.value++
            sec.value = parseInt(sec.value) - 59;
        }
        if(min.value > 60){
            hour.value++
            min.value = parseInt(min.value) - 60;
        }

        //this function will count down the time
        if(hour.value == 0 && min.value == 0 && sec.value == 0) {
            hour.value = "";
            min.value = "";
            sec.value = "";
            stopInterval();

        }else if(sec.value != 0){ //this mean if sec is not = zero then count down start after pressing the start button
            //min.value <= 10 → true, 
            //so "0" is added.
            //min.value - 1 → 8.
            //Result: "08".
            // the <=10 mean if any thing come below 10 then add 0 infront of that number if 9 came do 09
            sec.value = `${sec.value <= 10 ? "0" : ""}${sec.value - 1}`;
        }else if(min.value !=0 && sec.value == 0){
            sec.value=59;
            min.value = `${min.value <= 10 ? "0" : ""}${min.value - 1}`;
        }else if(hour.value !=0 && min.value == 0){
            min.value=60;
            hour.value = `${hour.value <= 10 ? "0" : ""}${hour.value - 1}`;
        }
    }

    stopBtn.addEventListener('click',function(){
        stopInterval('pause');
    })
    resetBtn.addEventListener('click',function(){
        hour.value = "";
        min.value = "";
        sec.value = "";
        stopInterval();
    })
})();