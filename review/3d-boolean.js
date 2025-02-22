let isDarkMode = false
let username = ""
let isUserLoggedIn = false
let isDashboard = false
console.log(`Is dark mode enabled: ${isDarkMode}`)  //interpolation

isUserLoggedIn = true
username = "Anna"
isDashboard = isUserLoggedIn && username

console.log(isDashboard)