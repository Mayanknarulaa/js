// stack (Primitive), heap(Non-Primitive or Refrence)

let myName = "mayanknarula"

let anotherName = myName
anotherName = "mayank"

console.log(myName);
console.log(anotherName);

let userOne = {
    email: "mayank@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "mayank@google.com"

console.log(userOne.email)