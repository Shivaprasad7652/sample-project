// alert("Hello shivu from JS")
// console.log("Hello this will be printed in console")
// prompt("Enter your age")

// alert(50)

// let name="Manoj"// variable declaration and initialisation
// name=45 //asigning new value

// console.log("Hello " + name) //String concatination
// console.log(name+" welcome to JS class")
// console.log(name+" you are learning JS..")

// Data types
// Primitive
// 1. Number
// 2. String -- "", ''
// 3. Boolean -- true or false
// 4. Undefined -- variable without initialization
// 5. null

// Object type (data structures)
// 1.Arrays
// 2.Objects
// 3.Sets
// 4.Maps

// 1.Variables
// const name56$ = "Hello"
// const firstName = "TS"
// const myage = 90
// const myAge = 80

// console.log(myage)

// 2.Operators
// 2.1 Mathematical or arithmetic operators(+, -, *, /, %, **)
// console.log(50+10)
// console.log(50-10)
// console.log(50*10)
// console.log(50/10)
// console.log(50%3)
// console.log(5**2)
// 2.2 Operator precedence ( '()', **,  (*./, %), +, -)
// console.log((5-2)*20+30-20/2)
// // 2.3 >, < >=, <=, ==, === comaparision operators

// const a = 50
// const b = 30
// const c = "50"

// console.log(a>b)
// console.log(a<b)
// console.log(a>=b)
// console.log(a<=b)
// console.log(a==c) //loose equality operator
// console.log(a===c) //strict equality operator

// statement and expression
// statement- performs an action
// Expression - Is a statement which evaluates to a singla value

// condition statement (if, if-else, elseif)

// let age = 18;
// const hasGoodVision = false;
// Nested if statement
// if(age >= 18){
//     if(hasGoodVision === true){
//         console.log("You are eligible to get Liscence")
//     }else{
//         console.log("Need good vision to get Liscence")
//     }

// }else{
//     console.log("You are not eligible to get Liscence")
// }

// if(age >=65){
//     console.log("You are eligible to get liscence but need to renival every year..")
// }else if(age >= 18){
//     console.log("You are eligible to get liscence but need to renival every 5 year..")
// }else{
//     console.log("You are not eligible to get liscence..")
// }

// Ternary operator
// condition ? statement if true : statement if false

// age >= 18
//   ? console.log("You are eligible to get Liscence")
//   : console.log("You are not eligible to get Liscence");

// age >= 18 // first condition
//   ? hasGoodVision === true //second condition
//     ? console.log("You are eligible to get Liscence") //if sc true
//     : console.log("You need good vision to get Liscence") //if sc false
//   : console.log("You are not eligible to get Liscence"); //if fc false

// logical operators &&, ||, ! (We use it to check for more than to conditions)
// if(age >= 18 || hasGoodVision === true){
//     console.log("You are eligible to get Liscence")
// }else{
//     console.log("You are not eligible to get Liscence")
// }

// && return true if both the conditions are true else returns false
// || returns false if both the conditions are false else returns true
// ! inverts the conditin if true --> false, false --> true

// console.log(!false)

// Type conversion and coersion
// const num = 2
// const bool = true
// let age = NaN;(not a number)
// console.log(age)

// console.log(typeof(num))
// console.log(typeof(Number(num)))

// let realNum = Number(num)

// console.log(typeof realNum)
// console.log(typeof String(string))
// Number(), String(), Boolean() --> 0, "", undefined, Null, NaN -->falsy values

// const boolValue = Boolean(age)
// console.log(boolValue)

// truthy values --> except for falsy values (0,"",undefined, NUll, NaN)

// String coersion
// console.log("Hello" + true)
// console.log("Hello" + 10)
// console.log("Hello" + undefined)
// console.log("Hello" + null)
// console.log("Hello" + NaN)

// Number Cersion
// console.log("40" - 20)
// console.log("40" * 20)
// console.log("40" / 20)
// console.log("4" ** 20)
// console.log("4" > 20)
// console.log("4" < 20)
// console.log("20" == 20)
// console.log("20" == 20)
// console.log(false >= 0)

// Boolean Coersion
// console.log("" > "true")
// console.log("" >= false)

// hasLiscence=true;
// msg = ""

// if(msg){
//     console.log(msg)
// }else{
//     console.log("No msg")
// }

// console.log(4+"hello" > 500)
// console.log(""+ 4 > 20)
// console.log("20"-5)
// console.log("hai"+7>3)
// console.log("30" <70)
// console.log(3**"39")
// console.log("40"==73)
// console.log("40"==40)
// console.log(true >= 0)
// console.log(false >= 7)
// console.log(30-"90")
// console.log(40-10)
// console.log("ok"+40)

// Looping statements
// for loop
// while loop
// do while loop

// for(i=0;i<5;i++){
//     console.log(i)
//     console.log("Monoj")
// }

// for (i = 5; i > 0; i--) {
//   console.log(i);
//   console.log("Monoj");
// }

// let i = 0;

// while (i >0) {
//   console.log(i);
//   console.log("Monoj");
//   i--
// }

// do{
// console.log(i)
// console.log("Manoj")
// i++
// }while(i<5)

// Switch statment

// let day = "Tuesday";

// switch (day) {
//   case "Monday":
//     console.log("Go prayer");
//     break;
//   case "Tuesday":
//     console.log("Go to movie");
//     break;
//   case "Wednesday":
//     console.log("Go play");
//     break;
//   case "Thursday":
//   case "Friday":
//   case "Saturday":
//   case "Sunday":
//     console.log("Take rest");
//     break;
//   default:
//     console.log("Not a valid day");
// }

// Functions
// function definition
// function taskManager(day) {
//     console.log("-------------------")
//     console.log("Today is "+day)
//   switch (day) {
//     case "Monday":
//       console.log("Go prayer");
//       break;
//     case "Tuesday":
//       console.log("Go to movie");
//       break;
//     case "Wednesday":
//       console.log("Go play");
//       break;
//     case "Thursday":
//     case "Friday":
//     case "Saturday":
//     case "Sunday":
//       console.log("Take rest");
//       break;
//     default:
//       console.log("Not a valid day");
//   }
// }
// parameter -- placeholder value for a function
// argument -actual value passed to a function

// calling function or invoking the function
// taskManager("Thursday")
// taskManager("Monday")

// function juiceMaker(fruit){
//     console.log("Preparing juice with "+fruit+" fruit")
// }

// juiceMaker("Orange")
// juiceMaker("Apple")

// function asianpaints(colour,walls) {
//     console.log("painting "+walls+" walls with" +colour+" color")
// }
// asianpaints(" blue",8)
// asianpaints(" red",4)
// asianpaints(" yellow",3)
// asianpaints(" orange",2)
// asianpaints(" maron",3)
// asianpaints(" black",0)
// asianpaints(" cream",4)

// function number(num)

// ***********Returnng value from function
// function calcAge(birthYear){
//   // console.log(2021-birthYear)

//   const age = 2021 - birthYear

//   return age;
// }

// const yourAge = calcAge(1999)

// console.log(calcAge(1996))
// console.log(yourAge)

// *****************Function calling function

// function cutFruit(fruitCount){
//   const totalPieces = fruitCount * 4;
//   return totalPieces
// }

// function juiceMaker(fruit, fruitCount){
//   const fruitPieces = cutFruit(fruitCount)
//   console.log("Preparing juice with "+fruitPieces+" "+fruit+" pieces")
// }

// juiceMaker("Apple", 5)

// function costprice(color) {
//   let price;

//   switch (color) {
//     case "blue":
//       price = 300;
//       break;
//     case "red":
//       price = 900;
//       break;
//     case "orange":
//       price = 500;
//       break;
//     default:
//       price = 0;
//       console.log("color not available");
//   }
//   return price;
// }

// function asianpaints(colour, walls) {
//   const price = costprice(colour);
//   if(price == 0){
//     console.log("Cannot paint walls")
//   }else{
//     console.log(
//       "painting " +
//         walls +
//         " walls with " +
//         colour +
//         " color & paint cost is" +
//         price
//     );
//   }
  
// }
// asianpaints("red", 4);
// asianpaints("orange", 4);

//  Function expression

// const calcAge = function(birthYear){
//   return 2021-birthYear
// }

// console.log(calcAge(1996))

// Arrow functions
//  const calcAge = birthYear =>  2021 - birthYear
//  console.log(calcAge(1996))

//  const paintWall = (color, walls) => {
//    price = costprice(color)

//    if(price === 0){
//     console.log("Canot paint walls")
//    }else{
//      console.log("Painting "+ walls+"walls with "+ color + " and the cost is "+ price+ " rupees")
//    }
//  }

//  paintWall("red", 2)

// Data Structures
// Arrays
// Objects
// Sets
// Maps


// const friends = new Array("Manoj", "Sanju", "Raghu")
// Indexing starts from 0
// const friends = ["Manoj", "Sanju", "Raghu", [94, "Manaoj", true, NaN]]

// console.log(friends[1])
// console.log(friends[3][1])

// friends[2] = "Raam"
// console.log(friends)
// Array Methods
// friends[3].push("Ravi")
// console.log(friends)
// friends.pop()
// console.log(friends)
// friends.pop()
// console.log(friends)
// friends.shift()
// console.log(friends)
// friends.unshift("Ravichandran")
// console.log(friends)

// const myInfo = {
//   // Key value pairs
//   Name:"Manoj",
//   full:"TS",
//   birthYear:1996,
//   fullName:"Sanju TS",
//   100:1000,
//   friends:["Manoj", "Sanju"],
//   // object methods
//   calcAge:function(){
//     return 2021-this.birthYear
//   }
// }

// dot notation
// console.log(myInfo.age)

// bracket notation
// console.log(myInfo["Name"]+myInfo["full"])
// console.log(myInfo[50+50])

// console.log(myInfo.calcAge())


// DOM - Document Object Model
// Object representaion of HTML document  -- An API provided by every browser
// API -- Application programming Interface.

// In DOM we will have the access of Window and Document objects
// console.log(window)
// console.log(document)

// We can modify DOM elements or nodes, create elements or delete elements

// const h1Ele = document.querySelector('h1')
// const h1Ele = document.querySelector('.greeting')
// const btn = document.querySelector('button')
// console.log(h1Ele)
// h1Ele.classList = "hello raam raaj raghu"
// console.log(h1Ele)

// h1Ele.textContent = "Hello Manoj"
// console.log(h1Ele.textContent)
// console.log(h1Ele.className)
// console.log(h1Ele.classList[1])
// console.log(h1Ele.id)


// // Event Listeners 
// // We have used a ananamous function
// btn.addEventListener('click', function(e){
//     // console.log(e)
//     if(h1Ele.textContent == "Hello Manoj"){
//         h1Ele.textContent = "Hello shivu"
//     }else{
//         h1Ele.textContent = "Hello Manoj"
//     }
    
// })

