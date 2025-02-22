const cities = ["Athens", "London", "Paris"]
cities.push("Berlin")

for ( let i = 0; i < cities.length;i++) {
    console.log(cities[i])
}

// cities.forEach( el =>  console.log(el))

const user = {
    firstname: "Marinos",
    age: 20,
    city: "Athens",
    
    hello: function() {
        console.log(`Hello, my name is ${this.firstname}`)
    }

}

user.hello()


function circleArea(radius) {
    return Math.PI * Math.pow(radius, 2)
}

let area = circleArea(5)

console.log(`Το εμβάδον του κύκλου με ακτίνα 5 είναι: ${area.toFixed(2)}`)


