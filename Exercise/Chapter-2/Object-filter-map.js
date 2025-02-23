const people = [
    {name:'Alice', age: 19},
    {name:'Bob', age: 37},
    {name:'Nick', age:23},
    {name:'Helen', age: 45}
];

const youngPeople = people.filter(a => a.age < 30)
console.log(youngPeople)

const youngPeopleName = youngPeople.map(n => n.name)
console.log(youngPeopleName)
