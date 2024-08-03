//
// food = Number(prompt('food '))
// tipPercentage = Number(prompt('tip %?') / 100)
// tipAmount = food * tipPercentage
// total = food + tipAmount
// console.log(tipAmount)
// console.log(total)

// console.log(Math.floor(Math.random() * 10))

// function sayMyName(name) {
//     greet = `hi ${name}, Nice to meet you!`
//     console.log(greet)
// }
//sayMyName('podoson');

// function sum ============================================================
function sum(a, b) {
    return a + b
}
num1 = sum(1, 2)
//console.log(num1)

// Arrow Functions ==>  ============================================================
//Explicit return
const sumArrow = (a, b) => {
    return a + b
}

// Implicit return
const sumArrow2 = (a, b) => a + b
//console.log(sumArrow2(12, 2))

//// Arrays ==>  ============================================================
const groceries = ['🍌', '🍎', '🍊', '🍐']
//console.log(groceries)
//console.log(groceries[3] + groceries[2])

groceries.push('🍪')
//console.log(groceries)

groceries.push('🫐')
// console.log(groceries)

//Array Slice
// // start from 0 Include and up to 2
// console.log(groceries.slice(3, 5))
// console.log(groceries.slice(1,3))

// array methods (slice, push, indexOf, length)
// console.log(groceries.indexOf('🫐'))
// console.log(groceries.length)

//// Objects {} ==>  ============================================================
//// Key : Value
const person = {
    name: 'Leonardo',
    shirt: 'white'
}
//
// console.log(person.name)
// console.log(person.shirt)
//
// // bracket notation
// console.log(person['name'])
// console.log(person['shirt'])
//
// // assign object
// person.phone = '1-22-333-4444'
// console.log(person.phone)
//
// person['house'] = 'mansion'
// console.log(person['house'])
//
// console.log(person)

// const introducer = (name, shirt) => {
//     const person = {
//         name: name,
//         shirt: shirt,
//         assets: 100000,
//         liability: 20000,
//         netWorth: function () {
//             return this.assets - this.liability
//         }
//     }
//     return `Hi my name is ${person.name} and the color of my shirt is ${person.shirt} and
//      my net worth is $ ${person.netWorth()} USD`
// }
//
// console.log(introducer('Podo', 'orange'))
// console.log(introducer('Leonardo', 'white'))

//// LOOP ==>  ============================================================

let fruits = ['🍌', '🍎', '🍊', '🍐', '🍪', '🫐']


// for(let i = 0; i < fruits.length; i++){
//     console.log(i, fruits[i])
// }

// for (const fruit of fruits){
//     console.log(fruit)
// }

// const double = (numbers) => {
//   let result = []
//   for (const number of numbers){
//       result.push(number ** 2)
//   }
//   return result
// }
//
// console.log(double([1, 2, 3, 4, 5, 6]))

// ///////////Letters//////////////////////////////
// const howManyLetters = (phrase) => {
//     let result = 0;
//    
//     for(const index in phrase){
//         console.log(Number(index) + 1)
//         result = Number(index) +1
//     }
//    
//     return {result}
// }
// const phrase = prompt('write your phrase.')
// console.log(howManyLetters(phrase))

//////////////////////// Max ////////////////////////
const max = (numbers) => {
    let result = numbers[0]
    
    for (const number of numbers){
        if(number > result)
            result = number
    }
    
    return {result}
}
//console.log(max([1,2,3,1,1,2,22, 4]))

////////////////////// Letter Frequency ////////////
const letterFrequency = (phrase) => {
    
    console.log(phrase)

    let frequency = {}
    
    for (const letter of phrase){
        if(letter in frequency){
            frequency[letter] ++
        }
        else{
            frequency[letter] = 1
        }
    }
    
    return frequency
}

//console.log(letterFrequency('hahha podo'))

////////////////////// Words Frequency ////////////
// const wordFrequency = (phrase) => {
//     let frequency = {}
//    
//     let words = phrase.split(' ')
//     console.log(words)
//    
//     for (const word of words){
//         if(word in frequency){
//             frequency[word] ++
//         }
//         else{
//             frequency[word] = 1
//         }
//     }
//     return frequency
// }
//
// console.log(wordFrequency('lol what lol'))

// const wordFrequency2 = (phrase) => {
//     const words = phrase.split(' ')
//     return letterFrequency(words)
// }
// let userInput = prompt('enter some phrase')
//console.log(wordFrequency2(userInput))

//// Higher order Functions ==>  ============================================================

////////////////////////  Map  /////////////////////

// const doubleMap = (numbers) => {
//     return numbers.map(number => number * 2)
// }
//
// console.log(doubleMap([1, 2, 3]));
//
// [1, 2, 3, 4, 2].map(number1 => {
//     console.log(number1)
//     console.log('hajaha')
// });

////////////////////////  Filter  /////////////////////
// playground = document.querySelector("#corp");
// const nums = [1, 2, 3, 4, 2, 5, 6, 7, 8, 9, 0]
//console.log(nums.filter(num => num > 8 || num < 2));
//
// const actors = [
//     {name: 'johnny', netWorth: 20000000},
//     {name: 'amber', netWorth: 10},
//     {name: 'leonardo', netWorth: 1000000}
// ]
//
// let result = actors.filter(actor => actor.netWorth > 10)
// console.log(result)
//
// let names = result.map(actor => actor.name).join(', ')
// playground.innerHTML = `<h1> ${names} </h1>`

// //////////////////// REDUCE METHOD //////////////////
// const nums = [1, 2, 3, 4, 2, 5]
// const result = nums.reduce((a, b) => a * b) 
// console.log(result)
//
// const actors1 = [
//     {name: 'johnny', netWorth: 20000000},
//     {name: 'amber', netWorth: 10},
//     {name: 'leonardo', netWorth: 1000000}
// ]
// console.log(actors1.reduce((a, b) => a + b.netWorth, 0))

// //////////////////// RANDOM //////////////////

const randomFruit = (fruits) => {
  const randomNumber = Math.floor(Math.random() * fruits.length);
    console.log(randomNumber)
  return fruits[randomNumber];
}

console.log(randomFruit(fruits))
















































