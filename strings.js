
// 'use strict'

// arr = [1, 2, 3]

// console.log(arr)

// arr[0] = 100
// console.log(arr);


// Accessing string characters using indexing
// console.log(str1[1])
// console.log(str1[2])
// console.log(str1[4])

// Strings are immutable 
// str1[0] = "A";

// console.log(str1.indexOf('n')) // first required letters index

// console.log(str1.lastIndexOf('n'))

// Includes

// const str2 = "manoj rAghu Pawan raAm  aaBBCCdd manoj manoj"

// console.log(str2.includes('manoj'))



// Replace

// console.log(str2.replace(/manoj/g, 'sanju'))
// console.log(str2)

// const strArray = str2.split(" ")
// console.log(strArray)

// const capsStrArray = [];

// for(let i = 0; i < strArray.length; i++){

// }

// strArray.forEach(str=>{
//     const firstLetter = str.slice(0,1).toUpperCase()
//     const restLetters = str.slice(1,str.length).toLowerCase()

//     capsStrArray.push(firstLetter+restLetters)
// })

// console.log(capsStrArray.join(" "))


// console.log(str2.toUpperCase())
// console.log(str1.includes('Manoj'))

// slice -- str.slice(start, end) -- returns slice of a string
// console.log(str1.slice(-5))

// console.log(str1.slice(0, str1.indexOf(" ")))

// console.log(str1.slice(str1.lastIndexOf(" ")+1, str1.length))

// Split

// console.log(str1.split(" "))

// const strArray = str1.split(" ");
// console.log(strArray[strArray.length-1])

// strArray[strArray.length-1] = "Sanju"

// console.log(strArray)


// Join
// console.log(strArray.join(" "))

// Padding

// const credNum = '2EAB 123 5344'
// const lastCredNums = credNum.slice(credNum.lastIndexOf(" "), credNum.length)

// const firstNum = credNum.slice(0, credNum.indexOf(" "))

// console.log(lastCredNums.padStart(19, "*"))


// console.log(firstNum.padEnd(19, "*"))




// concat
// let str1 = "Manoj";
// let str2 = "Putta";
// let str3 = str1.concat(" ", str2);
// console.log(str3);

// repeat
// let str3 = str1.repeat(" ", 10);
// console.log(str3);

//  search
const str1 = "welcome alpha ace academy";
const str2 = str1.search("ace");
console.log(str2);