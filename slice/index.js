 function number(num,index){
     num.splice(index)
     return num;
 }
 const numArray = [1,2,3,4,5,6]
 const numResult = number(numArray,2)
 console.log(numResult)



 function colors(color){
    color.splice(1,2)
    return color
 }
 const ArrayColor = ["red","blue","pink","black","white"]
 const colorResult = colors(ArrayColor)
 console.log(ArrayColor)


 function nameValue(value){
    return  value.splice(2,1)
 }
 const nameArray = ["kenny","taiwo", "ayo"]
 const nameResult = nameValue(nameArray)
 console.log(nameArray)

//   function product(productValue){
//     return productValue.slice(2,)
//   }
//   const productArray = [
//     {
//         id:1,
//         item:"book"
//     },
//     {
//         id:2,
//         item:"pen"
//     },
//     {
//         id:3,
//         item:"pencil"
//     },
//     {
//         id:4,
//         item:"key"
//     },
//   ]
// const productResult = product(productArray)
// console.log(productResult)

function task(taskValue,index){
 return taskValue.splice(index,1)
}
const toDoList = ["Task 1", "Task 2", "Task 3", "Task 4"];
const toDoListResult = task(toDoList, 2)
console.log(toDoListResult)



function string(stringValue){
    return stringValue.splice(2)
}
const stringArray = ["book","table","pen","any"]
const stringArrayResult = string(stringArray)
console.log(stringArrayResult)


function student(studentValue){
     studentValue.splice(1,3,"john","Alice")
     return studentValue
}
const studentName = ["taiwo","kenny","ay","temi"]
const result = student(studentName)
console.log(result)


// function song(songValue, index) {
//     return songValue.splice(index, 1);
//   }
  
//   const songArray = ["halleluya", "god is good", "song"];
//   const songResult = song(songArray, 1);
//   console.log(songResult); // This will log the removed element, which is "god is good"
  