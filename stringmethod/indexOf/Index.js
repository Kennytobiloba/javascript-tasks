function number(num,index) {
    return num.indexOf(index)  
}
const arrayNum = [1,2,3,4,5,6,7] ;
const result = number(arrayNum,3)
console.log(result)


function color(colors, index){
    return colors.indexOf(index);
}
const arrayColor = ["red","blue","pink"]
const resultcolor =color(arrayColor,"blue")
console.log(resultcolor)

function Name(names,index){
    return names.indexOf(index)
}
const namesArray = ["kenny","taiwo","Alice","ayo"]
const namesResult = Name(namesArray,"Alice")
console.log(namesResult)


// function product(products,index) {
//     return products.indexOf(index)
    
// }
// const productArray = [
//     {
       
//         name:"book"
//     },
//     {
       
//         name:"pen"
//     },
//     {
       
//         name:"biro"
//     },

// ]
// const productResult = product(productArray, "book")
// console.log(productResult)



function email(emails,value){
    return emails.indexOf(value)
}
const emailArray = ["olakenny@gmail.com", "taiwo@gmail.com"]
const arrayResult = email( emailArray,"taiwo@gmail.com")
console.log(arrayResult)