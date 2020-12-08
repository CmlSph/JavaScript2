/**
  In this week 's project you'll be making a Pomodoro Clock!
  A user can specify how many minutes the timer should be set, and with a click on the play button it starts counting down!If the user wants to pause the timer, they can do so by clicking the pause button.

  If the timer is running, the user can 't change the session length anymore
  Use at least 3 functions
  Display minutes and seconds
  If the timer finishes the timer should be replaced by the message: Time 's up!
 * 
 */
const buttonUp = document.getElementById("button_up");
buttonUp.addEventListener("click", increaseCounter);

const buttonDown = document.getElementById("button_down");
buttonDown.addEventListener("click", decreaseCounter);

const buttonPlay = document.getElementById("button_play");
buttonPlay.addEventListener("click", playCounter);

const buttonPause = document.getElementById("button_pause");
buttonPause.addEventListener("click", pauseCounter);

const buttonStop = document.getElementById("button_stop");
buttonStop.addEventListener("click", stopCounter);
buttonStop.style.display = "none";//to hide the stop button at the beginning

const counterTime = document.getElementById("userTime"); /*The user can increase or decrease the countertime*/
const sessionTime = document.getElementById("sessionTime");/*SessionTime changes according to the counterTime*/

let startingMinutes = 25; //Initial value for the counter.
let secondsLeft = startingMinutes * 60;

let countingdown;
let clockCountdown;
let paused;

/*This function creates the startingMinutes(25)*/
function calculateCounter(minute){
    startingMinutes = minute;
    counterTime.textContent = `${startingMinutes}`;
}
/*This function creates the sessionTime*/
function calculateTheTimeLeft(second){
    secondsLeft = second;

        let seconds = Math.floor((secondsLeft) % 60);
        let minutes = Math.floor((secondsLeft / 60) % 60);

        sessionTime.textContent = `${minutes >= 10 ? minutes : "0" + minutes} : ${seconds >= 10 ? seconds : "0" + seconds}`;
    }

    function countdown(){
        if (secondsLeft > 0){
            calculateTheTimeLeft(secondsLeft - 1);
        }
        else
        {
          clearInterval(clockCountdown);
          sessionTime.textContent = `Time's Up`;
        //   self.location="timeisup.m4a" //Just to try.
          
          
        
        }
    }

/*This function lets the user increase the startingMinutes and the sessionTime simultaneously*/
function increaseCounter(){
    if (startingMinutes < 60){ 
         if (countingdown !== true){ //to prevent increasing the counter during counting down.
            calculateCounter(startingMinutes + 1);
            calculateTheTimeLeft(secondsLeft + (1 * 60));/*(1 * 60) is to increase the minutes not the seconds*/
        }
        else
            
            document.getElementById("botton_up").disabled = true;/*We are not letting the user to increase the counter while counting*/
            document.getElementById("botton_up").disabled = false;
}
}
    
/*This function lets the user decrease the startingMinutes and the sessionTime simultaneously*/
function decreaseCounter(){
    if (startingMinutes > 1){ //prevent decreasing the startingMinutes to less than 1 minute
        if (countingdown !== true){ //to prevent decreasing the counter during counting down.
            calculateCounter(startingMinutes-1);
            calculateTheTimeLeft(secondsLeft - (1 * 60));/*(1 * 60) is to decrease the minutes not the seconds*/
        }
        else
            
            document.getElementById("button_down").disabled = true;/*We are not letting the user to decrease the counter while counting*/
            document.getElementById("button_down").disabled = false;
            
    }
    else
        alert("You can not set the counter under 1 minute.");
}

/*This function lets the user play the sessionTime*/
function playCounter(){
    
        clockCountdown = setInterval(countdown, 1000);

        countingdown = true;
        paused = false;

        buttonPlay.style.display = "none"; // to hide the play button
        buttonStop.style.display = "block"; // to show the pause button
    }

/*This function lets the user pause the sessionTime*/
function pauseCounter(){
    clearInterval(clockCountdown);

    if (paused = true){

    buttonPlay.style.display = "block"; // to show the play button
    buttonStop.style.display = "none"; // to hide the stop button
}
}
function stopCounter(){
    clearInterval(clockCountdown);

    secondsLeft = startingMinutes * 60;
    calculateTheTimeLeft(secondsLeft);

    countingdown = false;

    if (paused)
        paused = false;
    else{
        buttonPlay.style.display = "block"; // to show the play button
        buttonStop.style.display = "none"; // to hide the stop button
    }
}

calculateCounter(startingMinutes);
calculateTheTimeLeft(secondsLeft);






// https://stackoverflow.com/
// https://developer.mozilla.org/en-US/docs/Web/javascript
// https://www.w3schools.com/
// https://github.com/
// https://www.youtube.com/watch?v=x7WJEmxNlEs&ab_channel=FlorinPop