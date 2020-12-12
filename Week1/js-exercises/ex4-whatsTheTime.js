/**
 
 ** Exercise 4: What 's the time? **
 
 Why wear a watch when you can check the time, live in your webpage ?

  1. Create a basic HTML file
  2. in the HTML file Include a script tag and link the JavaScript file
  3. Inside the JS file, write a function that adds the current time to the webpage. Make sure it 's written in the HH:MM:ss notation (hour, minute, second). Hint: use `setInterval()` to make sure the time stays current
  4. Have the function execute when it 's loading in the browser

 */

function StartClock12() {
    Time12 = new Date();
    Cur12Hour = Time12.getHours();
    Cur12Mins = Time12.getMinutes();
    Cur12Secs = Time12.getSeconds();
    The12Time = (Cur12Hour > 12) ? Cur12Hour - 12 : Cur12Hour;
    The12Time += ((Cur12Mins < 10) ? ':0' : ':') + Cur12Mins;
    The12Time += ((Cur12Secs < 10) ? ':0' : ':') + Cur12Secs;
    The12Time += (Cur12Hour >= 12) ? ' PM': ' AM';
    document.CForm.Clock12.value = The12Time;
    window.status = The12Time;
    
}
 
  
  setInterval('StartClock12()',1000);