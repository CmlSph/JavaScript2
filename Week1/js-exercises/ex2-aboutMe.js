/**
 
 ** Exercise 2: About me **

 1. See HTML
 2. Change the body tag 's style so it has a font-family of "Arial, sans-serif".
 3. Replace each of the spans(nickname, fav - food, hometown) with your own information.
 4. Iterate through each li and change the class to "list-item".
 5. See HTML
 6. Create a new img element and set its src attribute to a picture of you.Append that element to the page.
 */

 const body = document.querySelector ('body');
body.style.fontFamily = 'Arial, sans-serif'

const newLi = document.getElementById("nickname");
newLi.innerHTML = 'Cem'

const newLi1 = document.getElementById('fav-food');
newLi1.innerHTML = 'Meatball'

const newLi2 = document.getElementById('hometown');
newLi2.innerHTML = 'Istanbul'

 
    var v = document.getElementsByTagName("li"); 
    v.className = "list-item"; 
    console.log(v);
 

const myPicture = document.createElement('img');
myPicture.src = 'javex2_2.jpg'
document.body.append(myPicture);