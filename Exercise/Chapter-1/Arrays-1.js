let arr = [10, 12, 14, 56, 99, 42, 10]

const uniqueValues = function(arr) {
    let uniqueArr = []
    
    for(let i = 0; i < arr.length; i++) {
        if (!uniqueArr.includes(arr[i])){
            uniqueArr.push(arr[i])
        }
    }

    return uniqueArr;
}

console.log(uniqueValues(arr))


const uniqueValues1 = (arr) => [...new Set(arr)]

console.log(uniqueValues1(arr))


console.log("-----------")

let nestedArray = [10, [12, 42], 12, [2, [5, 6]]]

const flattenArray = function(arr) {

    let flatArr = []

    for(let i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i])) {
            flatArr = flatArr.concat(flattenArray(arr[i]));

        } else {
            flatArr.push(arr[i])

        }
    }

    return flatArr;
}


console.log(flattenArray(nestedArray))
