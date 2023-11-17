
  // 1 Write a function that takes a string and an index as parameters and returns the character at that index. Implement error handling if the index is out of bounds.
  function getCharacterAtIndex(inputString, index) {
    try {
        index = Number(index); // Convert the index to a number
        if (index >= 0 && index < inputString.length) {
            return inputString.charAt(index);
        } else {
            throw new Error("Index is out of bounds");
        }
    } catch (error) {
        return error.message;
    }
}

const inputString = "hello, world!";
const index = 7; 
const result = getCharacterAtIndex(inputString, index);
console.log(result);

 function stringJoin(string1, string2){
    return string1.concat(string2);
 }
 const result2 = stringJoin("kenny","taiwo")
 console.log(result2)


//  (2)Create a function that finds the first non-repeated character in a given string using the charAt() method.

function repeated(str){
    for(let i = 0; i < str.length;i++){
        let char = str.charAt(i);
        if(str.indexOf(char) == str.lastIndexOf(char)){
            return char
        }
        else{
        return null
        }
    }
}
const repeatedResult = repeated("xhello")
console.log(repeatResult)



//  (3) Write a function that calculates the sum of the ASCII values of all characters in a string using the charCodeAt() method.
function sumASCII(str) {
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        sum += str.charCodeAt(i);
    }
    return sum; 
}

const stringResult = "Hello, ASCII!";
const totalASCII = sumASCII(stringResult);
console.log(totalASCII);


//  (4) create a function that checks if a string contain only uppercase letters using the charcodeAT() method
function text(upperValue){
    const charCode = upperValue.charCodeAt()
    if(charCode < 65 || charCode > 90){
       return false
    }
    else{
       return true
    }
}
const newResult = text("HELLO")
const newResult1 =text("hello")
console.log(newResult)
console.log(newResult1)





// (5) Implement a function that concatenates two strings without using the + operator but instead using the concat() method.
function concat(string1,string2){
    return string1.concat(string2)
}
const concatresult = concat("i love " ,  " coding ")
console.log(concatresult)



// (6) Write a function that accepts an array of strings and concatenates them into a single string using the concat() method.
function string(concatArray){
    return concatArray.join("")
}
const arr = ["i " ," love ", " eating "];
const arrResult = string(arr)
console.log(arrResult)

// (7) Create a function that checks if a given substring exists within a larger string.

function substr(value1,value2){
    const exist =  value1.includes(value2)
    return exist ? `'${value2}' exists within the larger string.` : `'${value2}' does not exist within the larger string.`
} 
 const substrResult = substr("i love kenny", "kenny")
 console.log(substrResult)



// (8) Implement a function that finds all occurrences of a word in a text string.


function findAllOccurrences(text, word) {
    const regex = new RegExp("\\b" + word + "\\b", "gi");
    const matches = text.match(regex);
    return matches ? matches : [];
}

const textResult = "Finding occurrences of words in a text is useful. This function finds occurrences.";
const wordToFind = "occurrences";

const occurrences = findAllOccurrences(textResult, wordToFind);
console.log(occurrences);


// (9)  Write a function that finds the first occurrence of a specified character in a string.
function findFirstOccurrence(inputString, character) {
    for (let i = 0; i < inputString.length; i++) {
      if (inputString[i] === character) {
        return i; 
      }
    }
    return -1; 
  }
  
  
  const inputResult = "Hello, World!";
  const charToFind = 'o';
  const resultOne = findFirstOccurrence(input, charToFind);
  
  if (resultOne !== -1) {
    console.log(`The first occurrence of '${charToFind}' is at index ${resultOne}`);
  } else {
    console.log(`'${charToFind}' is not found in the string.`);
  }

  
// (10)Implement a function that counts the number of occurrences of a word in a text string.
function countOccurrences(text, word) {
    const regex = new RegExp("\\b" + word + "\\b", "gi");
    const matches = text.match(regex);
    return matches ? matches.length : 0;
}

const texts = "Counting occurrences is important. This function counts occurrences of a word.";
const wordToCount = "occurrences";

const count = countOccurrences(texts, wordToCount);
console.log(count);



// (11) Create a function that extracts a portion of a string between two specified indices using the slice() method.
function extractString(str, startIndex, endIndex) {
    if (startIndex < 0) {
      startIndex = 0;
    }
  
    if (endIndex > str.length) {
      endIndex = str.length;
    }
  
    return str.slice(startIndex, endIndex);
  }
  const inputStr = "This is a sample string for extraction";
  const extractedString = extractString(inputStr, 5, 14);
  console.log(extractedString); 



  
// (12) Write a function that removes the last n characters from a string using the slice() method.

function removeLastNCharacters(str, n) {
    return str.slice(0, -n);
  }
  const inputStrResult = "Hello, World!";
  const modifiedString = removeLastNCharacters(inputStrResult, 5);
  console.log(modifiedString); 
  
  
//(13) Implement a function that splits a string into an array of words using the split() method. Remove any punctuation marks.
function splitStringIntoWords(sentence) {

    const words = sentence.replace(/[^\w\s]|_/g, "").split(/\s+/);
    return words;
  }
  
  
  const sentence = "This is a sentence! It has some punctuation, and it needs to be split.";
  const wordsArray = splitStringIntoWords(sentence);
  console.log(wordsArray);
  
  

  
// (14) Create a function that parses a comma-separated string into an array of values using the split() method.
function parseCommaSeparatedString(inputString) {
    const parsedArray = inputString.split(',').map(item => item.trim());
    return parsedArray;
  } 
  const commaSeparatedValues = "apple, orange, banana, pineapple, grape";
  const parsedValues = parseCommaSeparatedString(commaSeparatedValues);
  console.log(parsedValues);



//   15. Write a function that extracts a substring from a given string between two specified indices using the substring() method.

  function extractSubstring(inputString, startIndex, endIndex) {
    if (startIndex < 0 || endIndex >= inputString.length || startIndex > endIndex) {
      console.error("Invalid indices");
      return null;
    }
    const substring = inputString.substring(startIndex, endIndex + 1);
    return substring;
  }
  const originalStrin = "This is an example string";
  const startIndex = 5;
  const endIndex = 12;
  
  const results = extractSubstring(originalStrin, startIndex, endIndex);
  
  if (results !== null) {
    console.log(results); // Output: "is an ex"
  }

 


// (16) Create a function that reverses a substring within a larger string using the substring() method.

function substr(substring,startPoint,endPoint){
    const sub = substring.substring(startPoint,endPoint);
    const reverse = sub.split("").reverse().join('')
    return substring.substring(0, startPoint) + reverse + substring.substring(endPoint);
}
const substrRes = substr(" i love coding", 4, 9)
console.log(substrRes)



// (17) implement a function that converts all characters  in a sting to lowercase
function lower(value){
    return value.toLowerCase();
}
 const result5 = lower("HELLO")
 console.log(result5)
  



  
// (18) write a function that checks if two strings are equal (case-insensitive)

function equal(value1, value2){
    return value1.toLowerCase() === value2.toLowerCase()
}
const value1Result = equal("hello","HELLO");
const value2Result = equal("food","Welcome")
console.log(value1Result)
console.log(value2Result)





// (19) Create a function that converts the first letter of each word in a sentence to uppercase.
function capital(sentence){
  const words = sentence.split(' '); 
  const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  return capitalizedWords.join(' '); 
}

const capitalize = capital("i love coding");
console.log(capitalize);




// 20 Implement a function that checks if a string is in all uppercase letters.
function isUpperCase(inputString) {
    return inputString === inputString.toUpperCase();
  }
  const exampleString1 = "HELLO";
  const exampleString2 = "Hello";
  
  console.log(isUpperCase(exampleString1)); 
  console.log(isUpperCase(exampleString2)); 
  






// (21) You can create a function that checks if a string ends with a specified substring in JavaScript using the endsWith() method. Here's how you can do it:

function endwith(value, index){
    return value.endsWith(index)
}
const resultwith = endwith("loving" ,"ing") 
console.log(resultwith)


//(22) Create a function that checks if a file name has a valid file extension (e.g., ".jpg", ".txt").
function isValidFileExtension(fileName) {
    const validExtensions = [".jpg", ".txt", ".pdf", ".doc"];
    const fileExtension = fileName.slice(((fileName.lastIndexOf(".") - 1) >>> 0) + 2);
    return validExtensions.includes("." + fileExtension.toLowerCase());
  }
  const fileName1 = "document.txt";
  const fileName2 = "image.jpg";
  const fileName3 = "data.xlsx";

  console.log(isValidFileExtension(fileName1)); // Output: true
  console.log(isValidFileExtension(fileName2)); // Output: true
  console.log(isValidFileExtension(fileName3)); // Output: false
  

// (23) Implement a function that checks if a given string starts with a specified prefix.
function prefix(str,pre){
    return str.endsWith(pre)

}
const prefixResult = prefix("coding","ing")
console.log(prefixResult)


// (24) write a function that validates whether a url begins with "http;//" or "https//"


function value(url){
    return url.startsWith("http://") || url.startsWith("https://")
}
const urlResult1 = value("http:// facebok.com")
const urlResult2 = value("https:// goggle.com")
console.log(urlResult1)
console.log(urlResult2)


//(25) Create a function that removes leading and trailing whitespace from a string.
function removeWhitespace(inputString) {
    return inputString.trim();
  }
  const stringWithWhitespace = "   This is a string with leading and trailing whitespace.   ";
  const stringWithoutWhitespace = removeWhitespace(stringWithWhitespace);
  
  console.log(stringWithoutWhitespace);
  


// (26) Write a function that trims a given string to a specified maximum length while preserving word boundaries using the trim() method.
function trimStringToMax(str, maxLength) {
    if (str.length <= maxLength) {
      return str;
    }
    const trimmed = str.substr(0, maxLength);
    const lastSpaceIndex = trimmed.lastIndexOf(' ');
    
    if (lastSpaceIndex > 0) {
      return trimmed.substr(0, lastSpaceIndex);
    }
    return trimmed;
  }
  const longString = "This is a very long sentence that needs to be trimmed to a certain length.";
  const trimmedString = trimStringToMax(longString, 30);
  console.log(trimmedString);


  
// (27)implement a function that removes a trailing whitespace from a string using the trimEnd()
function input(inputvalue){
    return inputvalue.trimEnd()
}
const trimResult2 =  input("kenny works hard God pls crown her effort she deserve the best.      ")
console.log(trimResult2)


// (28) Create a function that trims a file path by removing any trailing slashes using the trimEnd() method.
function file(filepath){
    return filepath.replace(/\/+$/, '');
}
const filePath = file("path/to/directory/");
console.log(filePath);

//  (29)Write a function that removes leading whitespace from a string using the trimStart() method.
function removeLeadingWhitespace(inputString) {
    return inputString.trimStart();
  }
  const stringWithLeadingWhitespace = "   This is a string with leading whitespace.";
  const stringWithoutLeadingWhitespace = removeLeadingWhitespace(stringWithLeadingWhitespace);
  console.log(stringWithoutLeadingWhitespace);
  


// (30) Implement a function that trims a list of usernames by removing any leading spaces using the trimStart() method.

function trimUsernames(usernames) {
    const trimmedUsernames = usernames.map(username => username.trimStart());
    return trimmedUsernames;
  }
  const userList = ["   JohnDoe", "  Alice", "   Bob", "Eve  "];
  const trimmedList = trimUsernames(userList);
  console.log(trimmedList);
  


// (31) write a function that repeats a given string a specified number of time
function value(input, times){
    return input.repeat(times)
}
const repeatResult = value("kenny, ", 3)
console.log(repeatResult)


// (32) Implement a function that generates a pattern of asterisks, where each row has one more asterisk than the previous row, using the repeat() method.
function generateAsteriskPattern(rows) {
    for (let i = 1; i <= rows; i++) {
      console.log('*'.repeat(i));
    }
  }
  generateAsteriskPattern(5);


//  (33) write a function that replace all occurrences of a specified substring with another string
function value(input, search,replace){
    const regex = new RegExp(search, "g")
    return input.replace(regex, replace)


}
const resultReplace = value( "i love code but is somehow stressful", "code" ,"coding")
console.log(resultReplace)


// (34) Implement a function that formats a phone number by adding dashes in the appropriate places using the replace() method.
function formatPhoneNumber(phoneNumber) {
  // Remove any non-digit characters from the phone number
  const cleanedNumber = phoneNumber.replace(/\D/g, '');

  // Check if the cleaned number has 10 digits (assuming a standard US phone number)
  if (cleanedNumber.length === 10) {
    // Format the phone number with dashes
    return cleanedNumber.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
  } else {
    // Handle invalid phone numbers or numbers with different formats
    console.error("Invalid phone number format");
    return phoneNumber; // Return the original number if it's not 10 digits
  }
}

// Example usage
const phoneNumber = "1234567890";
const formattedNumber = formatPhoneNumber(phoneNumber);
console.log(`Original: ${phoneNumber}`);
console.log(`Formatted: ${formattedNumber}`);


// (35) Create a function that pads a string on the left with a specified character until it reaches a desired length.
function padLeft(str, desiredLength, padChar) {
    if (str.length >= desiredLength) {
      return str; 
    }
    const padding = padChar.repeat(desiredLength - str.length);
    return padding + str;
  }
  const originalString = "42";
  const paddedString = padLeft(originalString, 5, "0");
  console.log(paddedString); 
  
// (36) Write a function that formats a time in 24-hour format (e.g., "17:5" becomes "17:05") using the padStart() method.
function formatTime(inputTime) {
    const [hours, minutes] = inputTime.split(':');
    const formattedHours = hours.padStart(2, '0');
    const formattedMinutes = minutes.padStart(2, '0');
    return `${formattedHours}:${formattedMinutes}`;
  }
  
  const originalTime = "17:5";
  const formattedTime = formatTime(originalTime);
  console.log(formattedTime); 

  
// 37. Implement a function that pads a string on the right with a specified character until it reaches a desired length.

  function padStringRight(inputString, desiredLength, paddingCharacter) {
    if (inputString.length >= desiredLength) {
      return inputString; // No padding needed
    }
  
    const paddingLength = desiredLength - inputString.length;
    const padding = paddingCharacter.repeat(paddingLength);
  
    return inputString + padding;
  }
  const originaString = "Hello";
  const paddeString = padStringRight(originaString, 10, "-");
  
  console.log(paddeString);
  




  
  
// 38. Create a function that generates a table of contents for a document, aligning page numbers using the padEnd() method.
function generateTableOfContents(sections) {
    // Assuming sections is an array of objects with title and pageNumber properties
    let tableOfContents = "Table of Contents\n\n";
  
    sections.forEach((section, index) => {
      const pageNumber = section.pageNumber.toString();
      const line = `${index + 1}. ${section.title} ${pageNumber.padEnd(30 - section.title.length, '.')}\n`;
      tableOfContents += line;
    });
  
    return tableOfContents;
  }
  
  
  const documentSections = [
    { title: "Introduction", pageNumber: 1 },
    { title: "Methods", pageNumber: 12 },
    { title: "Results", pageNumber: 28 },
    { title: "Conclusion", pageNumber: 42 }
  ];
  
  const toc = generateTableOfContents(documentSections);
  console.log(toc);
  






// (39) Create a function that extracts all email addresses from a given text using the match() method and a regular expression.

function extractEmails(text) {
    const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
    const emails = text.match(emailRegex);
    return emails;
  }
  
  
  const textOne = 'Contact us at example@mail.com or support@example.com for assistance.';
  const extractedEmails = extractEmails(textOne);
  console.log(extractedEmails); 

  

//   40. Implement a function that counts the number of occurrences of a specific word in a text using the match() method.

function countOccurrences(text, word) {
    const regex = new RegExp(`\\b${word}\\b`, 'gi');
    const matches = text.match(regex);
    return matches ? matches.length : 0;
  }
  
  // Example usage
  const sampleText = "This is a sample text. The text contains sample examples.";
  const wordToCounts = "sample";
  const occurrencess = countOccurrences(sampleText, wordToCounts);
  console.log(`The word "${wordToCount}" occurs ${occurrencess} times.`);
  



  

// (41) Write a function that searches for a specified substring within a string and returns the index of the first occurrence using the search() method.
function findSubstringIndex(mainString, substring) {
    return mainString.search(substring);
}
const strRes = 'Hello, this is a test string for example.';
const substring = 'test';
const inde = findSubstringIndex(strRes, substring);
console.log(`The substring "${substring}" is found at index ${inde} in the main string.`);




// (42) Create a function that checks if a URL contains a specific query parameter using the search() method.
function hasQueryParam(url, param) {
    return url.includes(`?${param}=`) || url.includes(`&${param}=`);
}
const sampleURL = 'https://www.example.com/page?param1=value1&param2=value2';
const paramToCheck = 'param1';
const containsParam = hasQueryParam(sampleURL, paramToCheck);
if (containsParam) {
    console.log(`The URL contains the query parameter '${paramToCheck}'.`);
} else {
    console.log(`The URL does not contain the query parameter '${paramToCheck}'.`);
}


// 43. Write a function that finds and returns the index of the first occurrence of a specified character in a given string using the indexOf() method. If the character is not found, return -1.
function indexOfCharacter(text, char) {
    return text.indexOf(char);
  }
  const textExample = "Hello, world!";
  const charToFinds = "o";
  
  const charIndex = indexOfCharacter(textExample, charToFinds);
  console.log(`The index of the first occurrence of "${charToFind}" is ${charIndex}`);
  



// 44. Implement a function that searches for a word in a text string and returns the index of the first occurrence using the indexOf() method. If the word is not found, return -1.
function indexOfWord(text, word) {
    return text.indexOf(word);
  }
  const textExample2 = "This is an example sentence.";
  const wordToFinds = "example";
  
  const wordIndex = indexOfWord(textExample2, wordToFinds);
  console.log(`The index of the first occurrence of "${wordToFinds}" is ${wordIndex}`);
  


// (45) Create a function that finds and returns the index of the last occurrence of a specified character in a given string using the lastIndexOf() method. If the character is not found, return -1.
function lastIndexOfChar(str, char) {
    const lastIndex = str.lastIndexOf(char);
    return lastIndex;
}
const textRes = 'Hello, how are you?';
const charTo = 'o';

const lastIndex = lastIndexOfChar(textRes, charToFind);

if (lastIndex !== -1) {
    console.log(`Last occurrence of '${charTo}' found at index: ${lastIndex}`);
} else {
    console.log(`Character '${charTo}' not found in the string.`);
}



// 46. Write a function that searches for the last occurrence of a word in a text string and returns the index using the lastIndexOf() method. If the word is not found, return -1.


function findLastOccurrence(text, word) {
  const lastIndex = text.lastIndexOf(word);
  return lastIndex !== -1 ? lastIndex : -1;
}
const text = "This is an example text. Example text can contain example words.";
const searchWord = "example";
const lastOccurrenceIndex = findLastOccurrence(text, searchWord);

if (lastOccurrenceIndex !== -1) {
  console.log(`Last occurrence of "${searchWord}" found at index: ${lastOccurrenceIndex}`);
} else {
  console.log(`"${searchWord}" not found in the text.`);
}




//(47) Implement a function that takes a string and an index as parameters and returns the character at that index using the charAt() method. Handle cases where the index is out of bounds.
function getCharacterAtIndex(str, index) {
    if (index < 0 || index >= str.length) {
        return "Index out of bounds";
    }
    return str.charAt(index);
}
const tex = 'Hello, World!';
const position = 7; 
const character = getCharacterAtIndex(tex, position);
console.log(`Character at index ${position} is: ${character}`);



// (48) Create a function that extracts the middle character (or characters) from a string using the charAt() method. If the string has an even length, return the two middle characters.
function extractMiddleCharacters(str) {
    const length = str.length;
    const middle = Math.floor(length / 2);
  
    if (length % 2 === 0) {
      
      return str.slice(middle - 1, middle + 1);
    } else {
      
      return str.charAt(middle);
    }
  }
  const oddLength = extractMiddleCharacters("Hello");
  const evenLength = extractMiddleCharacters("World");
  console.log(oddLength); 
  console.log(evenLength); 


// (49) Write a function that counts the number of vowels (a, e, i, o, u) in a given string by iterating through its characters using the length property.    
function countVowels(strg) {
    const vowels = strg.match(/[aeiou]/gi);
    return vowels ? vowels.length : 0;
  }
  const exampleString = "This is a sample string";
  const vowelCount = countVowels(exampleString);
  console.log(vowelCount); 

//(50) Implement a function that checks if a string has a length that is a multiple of 5 using the length property. Return true if it is and false otherwise
function isMultipleOfFive(str) {
    return str.length % 5 === 0;
}
const texttwo = 'Hello, World!';
const resul = isMultipleOfFive(texttwo);
console.log(`Is the length a multiple of 5? ${resul}`);