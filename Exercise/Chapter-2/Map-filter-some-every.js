const arr = [1, 2, 3, 4, 5]

const doubleNumbers = arr.map(n => n * 2);
console.log(doubleNumbers + "\n")


const arr1 = [5, 6, 7, 8, 9, 10]

const evenNumbers = arr1.filter(num => num % 2 === 0)
console.log(evenNumbers + "\n")


const arr3 = [-10, 2, -1, 42, -7]

const possitiveNumbers = arr3.some(num => num > 0)
console.log(possitiveNumbers + "\n")


const arr4 = [41, 12, 12 -1]

const  allPositives = arr4.every(num => num > 0)
console.log(allPositives + "\n")