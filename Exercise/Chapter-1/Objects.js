const obj = {a: 1, b: 2, c : 7}
const key = ['a', 'c', 'e', 'd']

const filterobjByKey = function(obj, key) {
    let result = {}

    for (let k of key) {
        if (k in obj) {
            result[k] = obj[k]
        }
    }

    return result

}

console.log(filterobjByKey(obj,key))

console.log("------")



const mapObjectValues = function(obj, mappingFunction) {
    let result = {}

    for(let key in obj) {
        if (obj.hasOwnProperty(key)) {
            result[key] = mappingFunction(obj[key])
        }
    }

    return result
}

const doubleValues = mapObjectValues(obj, value => value * 2)

console.log(doubleValues)
console.log("----------")



const transformerObj = function(obj, callback) {
    let result = {}


    for(let key in obj) {

        if (obj.hasOwnProperty(key)) {
            
            let transformed = callback(key, obj[key])

            result[transformed.key] = transformed.value
            
        }

    }

    return result
}

const uppercaseKey = (key, value) => {
    return {
        key: key.toUpperCase(),
        value: value
    }
}

console.log(transformerObj(obj,uppercaseKey))