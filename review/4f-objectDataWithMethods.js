const user = {
    firstname: "George",
    lastname: "papado",
    getFirstname: function() {
        return this.firstname
    },

    getFullname() {
        return `${this.firstname},  ${this.lastname}`
    }

}

console.log(user.getFirstname())
console.log(user.getFullname())