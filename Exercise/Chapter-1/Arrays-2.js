const arr = [1, 2, 3, 4, 5,]

const chunkArray = function(arr, size) {

    let result = []

    for (let i = 0; i < arr.length; i += size) {

        let chunk = arr.slice(i, i + size)
        result.push(chunk)
    }

    return result;  

}

let array = chunkArray(arr, 3)


console.log(array)

console.log("-----")


const arr1 = [1, 2, 3, 4, 5]

const arr2 = [6, 7, 8, 4, 1]

const findCommonElemnts = function(arr1, arr2) {

    let result = []

    for(let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
        result.push(arr1[i])
    }
   }
    
    return result
}

console.log(findCommonElemnts(arr1, arr2))