// object literals

const mySym = Symbol("key1")

const jsUser = {
    name: "hitesh",
    [mySym]: "myKey1",
    age: 20,
    location: "Punjab",
    email: "mayank@google.com",
    isLoggedIn: true,
    lastLoginDays: ["Monday", "Saturday"],
}

console.log(jsUser["email"])
console.log(jsUser[mySym])
console.log(jsUser)
