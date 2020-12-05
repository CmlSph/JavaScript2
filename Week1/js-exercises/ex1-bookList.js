/**
  
 ** Exercise 1: The book list **

  I 'd like to display my three favorite books inside a nice webpage!

  1. Iterate through the array of books.
  2. For each book, create a `<p>`
  element with the book title and author and append it to the page.
  3. Use a `<ul>`  and `<li>` to display the books.
  4. Add an `<img>` to each book that links to a URL of the book cover.
  5. Change the style of the book depending on whether you have read it(green) or not(red).

  The end result should look something like this:
  https: //hyf-js2-week1-makeme-ex1-demo.herokuapp.com/

  */


 const books = [{
  title: 'The Design of Everyday Things',
  author: 'Don Norman',
  alreadyRead: false
},
{
  title: 'The Most Human Human',
  author: 'Brian Christian',
  alreadyRead: true
},
{
  title: 'The Pragmatic Programmer',
  author: 'Andrew Hunt',
  alreadyRead: true

}];

function createBookList(books) {
// your code goes in here, return the ul element



//First, we are creating an <ul>;
  let bookList = document.createElement('ul');

  for (let i = 0; i < books.length; i++){
    
// Then we are creating a paragraph for each book.

    let titleAndAuthor = document.createElement('p');
    titleAndAuthor.innerText = books[i].title + ' - ' + books[i].author;

    console.log(titleAndAuthor);//to check if everything is good so far.

    //Now we need to append the paragraphs in to the <li> items.
    let appendToListItems = document.createElement('li');
    appendToListItems.appendChild(titleAndAuthor); 

    //We are creating the images for each book.
    let imageOfBooks = document.createElement('img');
    imageOfBooks.src = `book${i+1}.jpg`

    //Now we need to append the images in to the <li> items.
    appendToListItems.appendChild(imageOfBooks);

    /*We already appended the paragraphs and images to <li> items.
    Now we need to append the <li> items to <ul>*/
    bookList.appendChild(appendToListItems);


    // We are checking whether the books are already red or not.

    // books[i].alreadyRead ? appendToListItems.style.backgroundColor= 'green' 
    // : appendToListItems.style.backgroundColor = 'red';

    appendToListItems.style.backgroundColor = books[i].alreadyRead ? 'green' : 'red'
     
}

  return bookList;

}

let ulElement = createBookList(books);

document.querySelector('div').appendChild(ulElement); 



