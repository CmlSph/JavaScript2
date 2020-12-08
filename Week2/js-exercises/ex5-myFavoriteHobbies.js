const myHobbies = [
    'Meditation',
    'Reading',
    'Programming',
    'Hanging out with friends',
    'Going to the gym',
  ];



function appendHobbiesList(myHobbies) {
    
  
    const div = document.getElementById('hobbies_status');
    const ul = document.createElement("ul"); //Create an unordered list
    div.appendChild(ul); // Append ul to div
  
    myHobbies.forEach(element => {
      const li = document.createElement("li"); // Add li items 
      ul.appendChild(li); //Attach li items to ul
  
      li.textContent = element; // Add hobbies to li items
      li.style.fontFamily = 'Arial' //Add some styling
      li.style.listStyleType = 'none'//add some styling
      
  
    });
}

appendHobbiesList(myHobbies); 

