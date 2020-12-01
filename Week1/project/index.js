// your code goes in here
var quotes = [
  "Be yourself; everyone else is already taken. - Oscar Wilde",
  "You only live once, but if you do it right, once is enough. - Mae West",
  "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
  "If you tell the truth, you don't have to remember anything. - Mark Twain",
  "A friend is someone who knows all about you and still loves you. - Elbert Hubbard",
  "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. - Ralph Waldo Emerson"
];

function newQuote() {
var randomNumber = Math.floor(Math.random() * (quotes.length));
var obj = '"'
document.getElementById('quoteDisplay').innerHTML = obj + ' ' + quotes[randomNumber];


}


document.getElementById('quoteDisplay').style.color = 'orange';

document.getElementById('quoteDisplay').style.fontFamily = 'Arial, sans serif';
