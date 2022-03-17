const button = document.querySelector('button')
// Passing default parameter values
// const bookings = [];

// const createBooking = (passengerName, numOfPassengers = 1, price = 500 * numOfPassengers) =>{

//     // ES5 way of passing default parameter values
//     // numOfPassengers = numOfPassengers || 1;
//     // price = price || 100 * numOfPassengers

//     const booking = {
//         passengerName,
//         numOfPassengers,
//         price
//     }

//     console.log(booking)
//     bookings.push(booking)
// }


// createBooking("Manoj", 5, 5000)



// How passing arguments work -- value vs reference

// const flightNum = "2H3554"

// fligh = flightNum

// const myInfo = {
//     passport:234509049,
//     name:"Manoj"
// }

// const checkCheckIn = (flight, personInfo) =>{

//     // personInfoCopy = {
//     //     ...personInfo
//     // }
    
    
//     // if(personInfo.passport == myInfo.passport) alert("Checked in")
//     // else alert('Not checked in')

//     // flight = "2A3333"
//     // personInfoCopy.passport = "2"
//     // personInfoCopy.name = "Sanju"
// }

// checkCheckIn(flightNum, myInfo)


// console.log(flightNum)
// console.log(myInfo)

// First class function & Higher order function

// In JS - functions are first class citizens 
// Functions are kind of objects



// We can pass functions as arguments to another function because functions are first class citizens ex --
// button.addEventListener('click', function(){

// })

// We can also return functions as value from a function because functions are first class citizens

// const counter = (counterVar)=>{
//     counterVar++
//     return counter
// }

// const num = counter(5)

// console.log(num)


// Higher order functions -- either they take functions as arguments or returns functions as value ex-- eventListeners, counters


