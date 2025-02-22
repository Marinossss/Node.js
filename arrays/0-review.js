const cities = ["Athens", "Paris", "Toronto"]

// Add - Modifies the array
cities.push("London")


let city = cities[0]

console.log(city)

cities[1] = "London"

cities.forEach( c => console.log(c))

cities.sort()

cities.sort((a, b) => a.localeCompare(b, "en")) // η a.localeCompare(b))
const citiesSorted = cities.slice().sort((a, b) => a.localeCompare(b, "en")) //Shallow copy

// Deep copy
const citiesCopy1 = JSON.parse(JSON.stringify(cities))

const cities2 = structuredClone(cities)

//Shallow copies --Spread operator
const cities3 = [...cities]

const nums = [1, 2, 3, 4]
let maxVal = Math.max(...nums)
let maxIndex = nums.indexOf(maxVal)
console.log(`Max value: ${maxVal}, Max Index: ${maxIndex}`)