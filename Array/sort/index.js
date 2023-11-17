function number(num) {
return num.sort()
    
}
const numArray = [3,4,5,1,0,2]
const numResult = number(numArray)
console.log(numResult)

function word(words) {
    return words.sort()
    
}
const wordArray = ["sleep","happy","eating"]
const wordResult = word(wordArray)
console.log(wordResult)


function age(ages) {
    return ages.sort()
    
}
const ageArray = [35, 20, 45, 10, 30]
const ageResult = age(ageArray)
console.log(ageResult)

function products(product){
    return product.sort(function(a, b){
        return  b.price - a.price;
    })
}
const priceArray =[
    {
        id:1,
        price:4000
    },
    {
        id:2,
        price:1000
    },
    {
        id:3,
        price:7000
    },
    {
        id:4,
        price:24000
    },
]
const priceResult = products(priceArray) 
console.log(priceArray);


function score(scores){
    return scores.sort(function(a, b){
        return b.score - a.score
    })
}
const scoreArray = [
    {
        id:1,
        score:40
    },

    {
        id:2,
        score:10
    },
    {
        id:3,
        score:30
    },
    {
        id:4,
        score:20
    },
]
const scoreResult = score(scoreArray)
console.log(scoreResult)





function population(pop){
    return pop.sort(function (a,b){
        return b.populations - a.populations
    })


}
const popArray = [
    {
        name:"lagos",
        populations: 300
    },
    {
        name:"ibadan",
        populations: 700
    },
    {
        name:"abuja",
        populations: 800
    },
]
const popResult = population(popArray)
console.log(popResult)




// 7. Question: Create an array of cities with objects containing names and populations. Write a function that uses the sort() method to sort the cities by population in descending order.

function sortdate(dates){
    return dates.sort(function (a, b){
        const dateA = new Date(a)
        const dateB = new Date(b)
        return dateA - dateB  

    })
}
const dateArray = ["2023-10-15",
"2022-05-20",
"2023-01-30",
"2021-12-05"]
const dateResult = sortdate(dateArray)
console.log(dateResult)