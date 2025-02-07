// Array

const myArr = [0, 1, 2, 3, 4, "Mayank", true]
const myArr2 = new Array(2, 4, "mayank");

//console.log(myArr2[2])

// Array Methods

//myArr.push(5)
//myArr.pop()

// unshift adds value at first position 
myArr.unshift(9)

//shift removes the first value position

myArr.shift()

console.log(myArr.includes(9));
console.log(myArr.indexOf("Mayank"));

const newArr = myArr.join()

console.log(newArr);
