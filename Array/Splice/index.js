//  1Write a JavaScript function that takes an array of numbers and uses the splice() method to remove the element at index 2 from the array.
function removeElementAtIndex(array) {
    array.splice(2, 1);
  }
  
  
  const numbersArray = [1, 2, 3, 4, 5];
  removeElementAtIndex(numbersArray);
  console.log(numbersArray); 
  
//  2 Given an array of colors, write a function that uses the splice() method to remove the second and third elements from the array.

function removeElementsFromColors(array) {
    array.splice(1, 2);
  }
  
  
  const colorsArray = ['red', 'green', 'blue', 'yellow'];
  removeElementsFromColors(colorsArray);
  console.log(colorsArray); 


  
// 3 Create an array of names. Write a function that uses the splice() method to remove the last name from the list.



function removeLastName(namesArray) {
    namesArray.splice(-1, 1);
  }
  
  
  const namesArray = ['John', 'Alice', 'Bob', 'Charlie'];
  removeLastName(namesArray);
  console.log(namesArray); 



  
//4  Write a function that takes an array of product objects and uses the splice() method to remove the second product from the array.


function removeSecondProduct(productsArray) {
    productsArray.splice(1, 1);
  }
  
  
  const productsArray = [
    {
        item:"car",
        id:1,
    },
    {
        item:"book",
        id:2,
    },
    {
        item:"pen",
        id:3,
    }
  ];
  removeSecondProduct(productsArray);
  console.log(productsArray); 
  

// 5  Create a function that simulates a to-do list. Given an array of tasks, write a function that uses the splice() method to remove a specific task by its index.


function removeFromToDoList(tasksArray, indexToRemove) {
    if (indexToRemove >= 0 && indexToRemove < tasksArray.length) {
      tasksArray.splice(indexToRemove, 1);
      console.log(`Task at index ${indexToRemove} removed successfully.`);
    } else {
      console.log(`Invalid index: ${indexToRemove}. No task removed.`);
    }
  }
  

  const toDoList = ['Task 1', 'Task 2', 'Task 3', 'Task 4'];
  removeFromToDoList(toDoList, 2);
  console.log(toDoList); 

  
// 6 Write a function that takes an array of strings and uses the splice() method to remove the first two strings from the array.

function removeFirstTwoStrings(stringsArray) {
    stringsArray.splice(0, 2);
    console.log('First two strings removed successfully.');
  }
  
  
  const stringArray = ['String 1', 'String 2', 'String 3', 'String 4'];
  removeFirstTwoStrings(stringArray);
  console.log(stringArray)


  
// 7 Create an array of student names. Write a function that uses the splice() method to replace the second and third names with "John" and "Alice."

function replaceNames() {
  
  let studentNames = ["Tom", "Bob", "Charlie", "David", "Eva"];

  
  studentNames.splice(1, 2, "John", "Alice");

  return studentNames;
}

console.log(replaceNames());



// 8 Implement a function that simulates a playlist. Given an array of songs, write a function that uses the splice() method to remove a song by its index from the playlist.


function removeSongByIndex(playlist, index) {
  // Check if the index is valid
  if (index >= 0 && index < playlist.length) {
    playlist.splice(index, 1);
    console.log(`Song at index ${index} removed from the playlist.`);
  } else {
    console.error("Invalid index. Please provide a valid index.");
  }

  return playlist;
}


let playlist = ["Song 1", "Song 2", "Song 3", "Song 4", "Song 5"];
let updatedPlaylist = removeSongByIndex(playlist, 2);


console.log(updatedPlaylist);


  
  

  




  