// 1 Given an array of names, write a function that uses the reverse() method to reverse the order of the names in the array.

function reverseArray(names){
    const nameReverse = names.reverse()
    return nameReverse
}
const arrayNames = ["kenny", "emma","ayo"]
const updatedNames = reverseArray(arrayNames)
console.log(updatedNames)


// 2 Create an array of colors. Write a function that uses the reverse() method to reverse the order of colors in the array.

function arrayColors(colors){
    const color = colors.reverse()
    return color
}
const arryColor = ["red","black", "pink"]
const updatedColor = arrayColors(arryColor)
console.log(updatedColor)



// 3 Write a function that takes an array of product objects and uses the reverse() method to reverse the order of the products in the array.

function objectArray(object){
    const product = object.reverse()
    return product
}
const arrayObject = [
    {
        id:1,

    },
    {
        id:2,

    },
    {
        id:3,

    },
    {
        id:4,

    },
]
const updatedArray = objectArray(arrayObject)
console.log(updatedArray)




// 4 Create a function that simulates a stack data structure. Given an array of elements, write a function that uses the reverse() method to reverse the order of elements, simulating the behavior of a stack.
function simulateStack(arr) {
    
    const reversedStack = arr.reverse();
  
    
    return reversedStack;
  }
  
  
  const elementsArray = [1, 2, 3, 4, 5];
  
  const reversedStack = simulateStack(elementsArray);
  
  console.log("Reversed Stack:", reversedStack);



// 5  Write a function that takes an array of sentences and uses the reverse() method to reverse the order of sentences in the array.

function reversedSentence(sentences){
    const arraySentences = sentences.reverse()
    return arraySentences
}
const sentencesArray =  ["Hello world.", "This is a sentence.", "JavaScript is fun!"];
const updatedSentences = reversedSentence(sentencesArray)
console.log(updatedSentences)




// 6 Create an array of tasks with due dates. Write a function that uses the reverse() method to reverse the order of tasks in the array, effectively displaying them from the last due date to the earliest.
function reverseTasksByDueDate(tasks) {
    
    const reversedTasks = tasks.reverse();
  
    
    return reversedTasks;
  }
  
 
  const tasksArray = [
    { task: "Task A", dueDate: "2023-12-31" },
    { task: "Task B", dueDate: "2023-11-15" },
    { task: "Task C", dueDate: "2023-11-30" },
  ];
  
  const reversedTasksArray = reverseTasksByDueDate(tasksArray);
  
  console.log("Reversed Tasks by Due Date:", reversedTasksArray);
  
  

// 7  Implement a function that simulates a chat history. Given an array of chat messages, write a function that uses the reverse() method to reverse the order of messages, displaying the most recent messages first.

  function reverseChatHistory(chatHistory) {
   
    const reversedChatHistory = chatHistory.reverse();
  
   
    return reversedChatHistory;
  }
  
 
  const chatMessagesArray = [
    { sender: "Alice", message: "Hello!" },
    { sender: "Bob", message: "Hi there!" },
    { sender: "Alice", message: "How are you?" },
  ];
  
  const reversedChatMessagesArray = reverseChatHistory(chatMessagesArray);
  
  console.log("Reversed Chat History:", reversedChatMessagesArray);
  