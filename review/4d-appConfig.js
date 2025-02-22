const appConfig = {
    appName: "javaApp",
    version: "2.0.0",
    apiEndPoints: {
    login: "/api/login",
    register: "/api/register"
    },
    isProdustion: false  
}

console.log(appConfig.apiEndPoints.login)