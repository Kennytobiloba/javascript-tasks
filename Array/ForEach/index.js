//(1)  Write a JavaScript function that takes an array of numbers and uses the forEach() method to print each number to the console.

function arrayNumber(num){
    num.forEach(element => {
        console.log(element)
        
    });
}
const numberArray = [1,2,3,4,5,6,7]
arrayNumber(numberArray)

// (2)  Given an array of names, write a function that uses the forEach() method to greet each person by name, e.g., "Hello, John!".

function greetPeople(people){
    people.forEach((names) =>{
        console.log(`hello, ${names}!`)
    })
}
const namesArray = ["John", "Alice", "Bob", "Eva"];
greetPeople(namesArray);



//(3)  Create an array of colors. Write a function that uses the forEach() method to create HTML elements (divs or spans) for each color and appends them to a web page.

function createColorElements(colors) {
    
    colors.forEach((color) => {
      
      const colorDiv = document.createElement('div');
      
      
      colorDiv.style.backgroundColor = color;
  
     
      colorDiv.style.width = '100px';
      colorDiv.style.height = '100px';
      colorDiv.style.margin = '5px';
      colorDiv.style.display = 'inline-block';
  
      
      document.body.appendChild(colorDiv);
    });
  }
  
 
  const colorsArray = ["red", "green", "blue", "yellow", "purple"];
  createColorElements(colorsArray);


  
// (4)  Create a function that simulates a to-do list. Given an array of tasks with descriptions, write a function that uses the forEach() method to display each task with a checkbox for completion.

function displayTasks(tasks){
    tasks.forEach((task) => {
        const label = document.createElement("label")

        const checkbox = document.createElement("input")
        checkbox.type = 'checkbox'
         label.appendChild(document.createTextNode(task.description))
         document.body.appendChild(checkbox);
         document.body.appendChild(label);

         document.body.appendChild(document.createElement('br'));
    })
}
const tasksArray = [
    { description: 'Task 1' },
    { description: 'Task 2' },
    { description: 'Task 3' },
    { description: 'Task 4' }
  ];
  
displayTasks(tasksArray);

//(5)  Write a function that takes an array of sentences and uses the forEach() method to count the number of words in each sentence and display the counts on a web page.

function displayWordCounts(sentences) {
   
    sentences.forEach((sentence, index) => {
     
      const words = sentence.split(' ');
  
     
      const wordCount = words.length;
  
      
      const paragraph = document.createElement('p');
      paragraph.textContent = `Sentence ${index + 1}: ${wordCount} words`;
      document.body.appendChild(paragraph);
    });
  }









  
  
 
  const sentencesArray = [
    'This is a sample sentence.',
    'Another example with more words.',
    'A short one.'
  ];
  displayWordCounts(sentencesArray);





// (6)   Create an array of tasks with due dates. Write a function that uses the forEach() method to display each task's description and due date in a formatted way.



  function displayTasksWithDueDates(tasks) {
    
    tasks.forEach((task, index) => {
      
      const formattedDueDate = task.dueDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  
      const paragraph = document.createElement('p');
      paragraph.textContent = `Task ${index + 1}: ${task.description} (Due Date: ${formattedDueDate})`;
      document.body.appendChild(paragraph);
    });
  }
  
  
  const tasksArraytwo = [
    { description: 'Task 1', dueDate: new Date('2023-12-01') },
    { description: 'Task 2', dueDate: new Date('2023-12-15') },
    { description: 'Task 3', dueDate: new Date('2023-11-25') }
  ];
  
  displayTasksWithDueDates(tasksArraytwo);

//  (8) Implement a function that simulates a user list. Given an array of user objects with names and roles, write a function that uses the forEach() method to display each user's name and role on a web page.

  function displayUserList(users) {

    users.forEach((user, index) => {
     
      const paragraph = document.createElement('p');
      paragraph.textContent = `User ${index + 1}: ${user.name} (Role: ${user.role})`;
      document.body.appendChild(paragraph);
    });
  }
  
  
  const usersArray = [
    { name: 'John Doe', role: 'Admin' },
    { name: 'Alice Smith', role: 'Moderator' },
    { name: 'Bob Johnson', role: 'User' }
  ];
  
  displayUserList(usersArray);
  