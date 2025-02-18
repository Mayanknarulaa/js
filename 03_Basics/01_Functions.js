// function loginUserMessage(username){
//     return `${username} just logged in`
// }

function loginUserMessage(username){
    if(!username){
        console.log("Please enter your username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage())