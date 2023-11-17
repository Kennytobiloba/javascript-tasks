// (1) Write a JavaScript function that takes an array of words and uses the join() method to create a single string where words are separated by spaces.

function concatenateWords(wordsArray){
    return wordsArray.join(', ')
}
const words = ['Hello', 'world', 'of', 'JavaScript'];
const result = concatenateWords(words);
console.log(result)

//(2) Given an array of names, write a function that uses the join() method to create a comma-separated string of names.

function concatenateNames(nameArray){
    return nameArray.join(' ')
}
const names = ['taiwo', 'kenny', 'adesola', 'dara'];
const nameResult = concatenateWords(names);
console.log(nameResult)

// (3) Create an array of numbers. Write a function that uses the join() method to create a string where numbers are 2eparated by hyphens.

function concatenateNumber(number){
    return number.join(' - ')
}
const numbers = [1,2,3,4,5,6,];
const numberResult = concatenateNumber(numbers);
console.log(numberResult)



//(4) Write a function that takes an array of words and uses the join() method to create a string where words are separated by a custom character, such as "_"



function concatenateWordsWithCustomSeparator(wordsArray, separator) {
  
  return wordsArray.join(separator);
}


const wordsArray = ['apple', 'banana', 'orange'];
const customSeparator = '_';
const resultWithCustomSeparator = concatenateWordsWithCustomSeparator(wordsArray, customSeparator);

console.log(resultWithCustomSeparator); 




//(5) Create a function that simulates a tag generator. Given an array of tags, write a function that uses the join() 4ethod to create an HTML-friendly string of tags separated by
// elements.


function generateHTMLTags(tagArray) {
    
    const htmlString = tagArray.join('</span><span>');
  
    
    return `<span>${htmlString}</span>`;
  }
  
  // Example usage:
  const tags = ['JavaScript', 'HTML', 'CSS'];
  const htmlTagsString = generateHTMLTags(tags);
  
  console.log(htmlTagsString);
  

//(6)   Write a function that takes an array of sentences and uses the join() method to create a single string where 5entences are separated by a period and a space.


function concatenateSentences(sentencesArray) {
    
    const resultString = sentencesArray.join('. ');
  
    return resultString;
  }
  
  
  const sentences = [
    'This is the first sentence',
    'Here comes the second one',
    'And finally, the third sentence'
  ];
  
  const concatenatedString = concatenateSentences(sentences);
  
  console.log(concatenatedString);
 






// (7)  Create an array of product names. Write a function that uses the join() method to create a string where product names 6re separated by line breaks ("\n").

  function formatProductNames(productNamesArray) {
    
    const resultString = productNamesArray.join('\n');
  
    return resultString;
  }
  
  
  const productNames = [
    'Product 1',
    'Product 2',
    'Product 3',
    'Product 4'
  ];
  
  const formattedNames = formatProductNames(productNames);
  
  console.log(formattedNames);
 
  
// (8) Implement a function that simulates a recipe 4enerator. Given an array of recipe steps, write a function that uses 7he join() method to create a string7of steps separated by line breaks and number2.8


function formatRecipeSteps(recipeStepsArray) {
    
    const numberedSteps = recipeStepsArray.map((step, index) => `${index + 1}. ${step}`);
  
    
    const resultString = numberedSteps.join('\n');
  
    return resultString;
  }
  
  // Example usage:
  const recipeSteps = [
    'Preheat the oven to 350°F.',
    'Mix the dry ingredients in a bowl.',
    'Add the wet ingredients and stir well.',
    'Pour the batter into a greased pan.',
    'Bake for 30 minutes.'
  ];
  
  const formattedSteps = formatRecipeSteps(recipeSteps);
  
  console.log(formattedSteps);
  
