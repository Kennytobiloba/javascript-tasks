
   //  create a function that extracts a portion of a string between two specified indices using the slice method
             function str(input, index) {
            return input.slice(5, index);
            }

            const res = str("i love coding", 8); 
            console.log(res); 


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





// create a function that checks if a file name has a valid file extension
function file(value){
    const validFile = /\.(jpg|jpeg|png|gif|pdf|doc|docx|txt)$/i ;
    return validFile.test(value)
}
const fileResult = file("picture.png")
console.log(fileResult)


// implement a function that checks if a given string starts with a specified substring


function starwith(value,index){
    return value.startsWith(index)
}
const startResult = starwith("welcome", "we")
console.log(startResult)




// implement a fuction that checks if a string has a length that checks if a string has a length that  is a multiple of 5 using the length property return true if it is  and false 


const resultLength = value("hellooo")
console.log(resultLength)














 




// Implement a function that formats a phone number by adding dashes in the appropriate places using the replace() method.

function formatPhoneNumber(phoneNumber) {
  
    const digitsOnly = phoneNumber.replace(/\D/g, '');

   
    const formattedNumber = digitsOnly.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');

    return formattedNumber;
}


const phoneNumber = '1234567890';
const formatted = formatPhoneNumber(phoneNumber);
console.log(formatted); 






































// Write a function that counts the number of vowels (a, e, i, o, u) in a given string by iterating through its characters using the length property.






















   