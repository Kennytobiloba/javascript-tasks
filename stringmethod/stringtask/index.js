
        // Write a function that takes a string and an index as parameters and returns the character at that index. Implement error handling if the index is out of bounds.
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
   //  create a function that extracts a portion of a string between two specified indices using the slice method
             function str(input, index) {
            return input.slice(5, index);
            }

            const res = str("i love coding", 8); 
            console.log(res); 

// create a function that checks if a string contain only uppercase letters using the charcodeAT() method
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

// write a function that takes a string and an index as parameters and returns the character at that index  using the chaAt() method.if the string handle caases where the index is out of bounds 


function bound(string,index){

    const char = string.charAt(index)
    return char
    if(index < 0 && index <= string.length){
        return "out of bounds"
    }


}
const resultNew = bound("tobiloba", 5)
console.log(resultNew)

// write a function that removes leading and trailing whitespace from a string
function input(inputvalue){
    return inputvalue.trim()
}
const trimResult =  input("     kenny works hard God pls crown her effort she deserve the best")
console.log(trimResult)

// implement a function that removes a trailing white space from a string using the trimEnd()
function input(inputvalue){
    return inputvalue.trimEnd()
}
const trimResult2 =  input("kenny works hard God pls crown her effort she deserve the best.      ")
console.log(trimResult2)

// implement a function that converts all characters  in a sting to lowercase
function lower(value){
    return value.toLowerCase();
}
 const result5 = lower("HELLO")
 console.log(result5)

//  You can create a function that checks if a string ends with a specified substring in JavaScript using the endsWith() method. Here's how you can do it:

function endwith(value, index){
    return value.endsWith(index)
}
const resultwith = endwith("loving" ,"ing") 
console.log(resultwith)


// create a function that checks if a file name has a valid file extension
function file(value){
    const validFile = /\.(jpg|jpeg|png|gif|pdf|doc|docx|txt)$/i ;
    return validFile.test(value)
}
const fileResult = file("picture.png")
console.log(fileResult)

// write a function that checks if two strings are equal (case-insensitive)

function equal(value1, value2){
    return value1.toLowerCase() === value2.toLowerCase()
}
const value1Result = equal("hello","HELLO");
const value2Result = equal("food","Welcome")
console.log(value1Result)
console.log(value2Result)


// implement a function that checks if a given string starts with a specified substring


function starwith(value,index){
    return value.startsWith(index)
}
const startResult = starwith("welcome", "we")
console.log(startResult)




// write a function that repeats a given string a specified number of time
function value(input, times){
    return input.repeat(times)
}
const repeatResult = value("kenny, ", 3)
console.log(repeatResult)

// write a function that replace all occurrences of a specified substring with another string
function value(input, search,replace){
    const regex = new RegExp(search, "g")
    return input.replace(regex, replace)
}
const resultReplace = value( "i love code but is somehow stressful", "code" ,"coding")
console.log(resultReplace)

// implement a fuction that checks if a string has a length that checks if a string has a length that  is a multiple of 5 using the length property return true if it is  and false 


const resultLength = value("hellooo")
console.log(resultLength)







// write a function that validates whether a url begins with "http;//" or "https//"


function value(url){
    return url.startsWith("http://") || url.startsWith("https://")
}
const urlResult1 = value("http:// facebok.com")
const urlResult2 = value("https:// goggle.com")
console.log(urlResult1)
console.log(urlResult2)



// Implement a function that concatenates two strings without using the + operator but instead using the concat() method.
function concat(string1,string2){
    return string1.concat(string2)
}
const concatresult = concat("i love " ,  " coding ")
console.log(concatresult)





// Write a function that accepts an array of strings and concatenates them into a single string using the concat() method.



function string(concatArray){
    return concatArray.join("")
}
const arr = ["i " ," love ", " eating "];
const arrResult = string(arr)
console.log(arrResult)


// Create a function that checks if a given substring exists within a larger string.

function substr(value1,value2){
    const exist =  value1.includes(value2)
    return exist ? `'${value2}' exists within the larger string.` : `'${value2}' does not exist within the larger string.`
} 
 const substrResult = substr("i love kenny", "kenny")
 console.log(substrResult)


 
// Create a function that reverses a substring within a larger string using the substring() method.

function substr(substring,startPoint,endPoint){
    const sub = substring.substring(startPoint,endPoint);
    const reverse = sub.split("").reverse().join('')
    return substring.substring(0, startPoint) + reverse + substring.substring(endPoint);
}
const substrRes = substr(" i love coding", 4, 9)
console.log(substrRes)


// Create a function that trims a file path by removing any trailing slashes using the trimEnd() method.
function file(filepath){
    return filepath.replace(/\/+$/, '');
}
const filePath = file("path/to/directory/");
console.log(filePath);


// Implement a function that checks if a given string starts with a specified prefix.
function prefix(str,pre){
    return str.endsWith(pre)

}
const prefixResult = prefix("coding","ing")
console.log(prefixResult)


// Implement a function that formats a phone number by adding dashes in the appropriate places using the replace() method.

function formatPhoneNumber(phoneNumber) {
  
    const digitsOnly = phoneNumber.replace(/\D/g, '');

   
    const formattedNumber = digitsOnly.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');

    return formattedNumber;
}


const phoneNumber = '1234567890';
const formatted = formatPhoneNumber(phoneNumber);
console.log(formatted); 




// Create a function that converts the first letter of each word in a sentence to uppercase.
function capital(sentence){
    const words = sentence.split(' '); 
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    return capitalizedWords.join(' '); 
}

const capitalize = capital("i love coding");
console.log(capitalize);



// Create a function that pads a string on the left with a specified character until it reaches a desired length.
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



// Create a function that finds the first non-repeated character in a given string using the charAt() method.

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


// Write a function that calculates the sum of the ASCII values of all characters in a string using the charCodeAt() method.
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





// Implement a function that finds all occurrences of a word in a text string.


function findAllOccurrences(text, word) {
    const regex = new RegExp("\\b" + word + "\\b", "gi");
    const matches = text.match(regex);
    return matches ? matches : [];
}

const textResult = "Finding occurrences of words in a text is useful. This function finds occurrences.";
const wordToFind = "occurrences";

const occurrences = findAllOccurrences(textResult, wordToFind);
console.log(occurrences);



// Implement a function that counts the number of occurrences of a word in a text string.
function countOccurrences(text, word) {
    const regex = new RegExp("\\b" + word + "\\b", "gi");
    const matches = text.match(regex);
    return matches ? matches.length : 0;
}

const texts = "Counting occurrences is important. This function counts occurrences of a word.";
const wordToCount = "occurrences";

const count = countOccurrences(texts, wordToCount);
console.log(count);




// Write a function that finds the first occurrence of a specified character in a string.
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


// Create a function that extracts a portion of a string between two specified indices using the slice() method.



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


// Write a function that removes the last n characters from a string using the slice() method.

function removeLastNCharacters(str, n) {
  return str.slice(0, -n);
}


const inputStrResult = "Hello, World!";
const modifiedString = removeLastNCharacters(inputStrResult, 5);
console.log(modifiedString); 


// Implement a function that splits a string into an array of words using the split() method. Remove any punctuation marks.
function splitStringIntoWords(sentence) {

  const words = sentence.replace(/[^\w\s]|_/g, "").split(/\s+/);
  return words;
}


const sentence = "This is a sentence! It has some punctuation, and it needs to be split.";
const wordsArray = splitStringIntoWords(sentence);
console.log(wordsArray);





// Create a function that parses a comma-separated string into an array of values using the split() method.


function parseCommaSeparatedString(inputString) {
  const parsedArray = inputString.split(',').map(item => item.trim());
  return parsedArray;
}


const commaSeparatedValues = "apple, orange, banana, pineapple, grape";
const parsedValues = parseCommaSeparatedString(commaSeparatedValues);
console.log(parsedValues);


// Write a function that formats a time in 24-hour format (e.g., "17:5" becomes "17:05") using the padStart() method.


function formatTime(inputTime) {
  const [hours, minutes] = inputTime.split(':');
  const formattedHours = hours.padStart(2, '0');
  const formattedMinutes = minutes.padStart(2, '0');
  return `${formattedHours}:${formattedMinutes}`;
}

const originalTime = "17:5";
const formattedTime = formatTime(originalTime);
console.log(formattedTime); 


// Create a function that generates a table of contents for a document, aligning page numbers using the padEnd() method.



function generateTableOfContents(contents) {
  let table = "Table of Contents\n";
  contents.forEach((content, index) => {
    const pageNumber = (index + 1).toString();
    const entry = `${content.title} ${pageNumber.padEnd(30 - content.title.length, '.')}\n`;
    table += entry;
  });
  return table;
}


const documentContents = [
  { title: "Introduction" },
  { title: "Methods and Tools" },
  { title: "Results" },
  { title: "Conclusion" }
];

const tableOfContents = generateTableOfContents(documentContents);
console.log(tableOfContents);




// Implement a function that generates a pattern of asterisks, where each row has one more asterisk than the previous row, using the repeat() method.


function generateAsteriskPattern(rows) {
  for (let i = 1; i <= rows; i++) {
    console.log('*'.repeat(i));
  }
}


generateAsteriskPattern(5);



// Create a function that extracts all email addresses from a given text using the match() method and a regular expression.

function extractEmails(text) {
  const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
  const emails = text.match(emailRegex);
  return emails;
}


const textOne = 'Contact us at example@mail.com or support@example.com for assistance.';
const extractedEmails = extractEmails(textOne);
console.log(extractedEmails); 






// Write a function that trims a given string to a specified maximum length while preserving word boundaries using the trim() method.



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







// Implement a function that trims a list of usernames by removing any leading spaces using the trimStart() method.

function trimUsernames(usernames) {
  const trimmedUsernames = usernames.map(username => username.trimStart());
  return trimmedUsernames;
}


const userList = ["   JohnDoe", "  Alice", "   Bob", "Eve  "];
const trimmedList = trimUsernames(userList);
console.log(trimmedList);



// Create a function that extracts the middle character (or characters) from a string using the charAt() method. If the string has an even length, return the two middle characters.
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


// Write a function that counts the number of vowels (a, e, i, o, u) in a given string by iterating through its characters using the length property.






// Write a function that searches for a specified substring within a string and returns the index of the first occurrence using the search() method.



function findSubstringIndex(mainString, substring) {
    return mainString.search(substring);
}

// Example usage
const strRes = 'Hello, this is a test string for example.';
const substring = 'test';
const inde = findSubstringIndex(strRes, substring);

console.log(`The substring "${substring}" is found at index ${inde} in the main string.`);


// Create a function that checks if a URL contains a specific query parameter using the search() method.



function hasQueryParam(url, param) {
    return url.includes(`?${param}=`) || url.includes(`&${param}=`);
}

// Example usage
const sampleURL = 'https://www.example.com/page?param1=value1&param2=value2';
const paramToCheck = 'param1';

const containsParam = hasQueryParam(sampleURL, paramToCheck);

if (containsParam) {
    console.log(`The URL contains the query parameter '${paramToCheck}'.`);
} else {
    console.log(`The URL does not contain the query parameter '${paramToCheck}'.`);
}




// Write a function that counts the number of vowels (a, e, i, o, u) in a given string by iterating through its characters using the length property.    

function countVowels(strg) {
  const vowels = strg.match(/[aeiou]/gi);
  return vowels ? vowels.length : 0;
}


const exampleString = "This is a sample string";
const vowelCount = countVowels(exampleString);
console.log(vowelCount); 

// Create a function that finds and returns the index of the last occurrence of a specified character in a given string using the lastIndexOf() method. If the character is not found, return -1.


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



// Implement a function that takes a string and an index as parameters and returns the character at that index using the charAt() method. Handle cases where the index is out of bounds.
function getCharacterAtIndex(str, index) {
    if (index < 0 || index >= str.length) {
        return "Index out of bounds";
    }
    return str.charAt(index);
}

// Example usage
const tex = 'Hello, World!';
const position = 7; // change this index to test different characters

const character = getCharacterAtIndex(tex, position);
console.log(`Character at index ${position} is: ${character}`);



// Implement a function that checks if a string has a length that is a multiple of 5 using the length property. Return true if it is and false otherwise



function isMultipleOfFive(str) {
    return str.length % 5 === 0;
}

// Example usage
const texttwo = 'Hello, World!';
const resul = isMultipleOfFive(texttwo);
console.log(`Is the length a multiple of 5? ${resul}`);













   