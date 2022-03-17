// IIFY - Immediately Invoked Function

// const sampFunct = function(){
//     console.log("Sample method printing..")
// }


// sampFunct()
// sampFunct()
// sampFunct()
// sampFunct()

// (function(){
//     console.log("IIFY Functin executing")
// })()


// Closures

const secureBooking = function(){
    let passenger = 0;
    let name = "Manoj"

    return function(){
        name
        passenger++
        console.log(passenger)
    }
}


// console.log(passenger)

const book = secureBooking();

book();
book();
book();
book();

console.dir(book)




