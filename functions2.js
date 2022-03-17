// The Call method
const lufthansa = {
    name:"Lufthansa",
    flightCode:'LH',
    planCount: 200,
    bookings:[],
    book:function(flightNum, name){
        console.log(`${name} has booked a flight with ${this.name} and the flight is ${this.flightCode + flightNum}`);
        this.bookings.push({flightNum, name})

        console.log(this.bookings)
    },

    buyPlane(){
        console.log(this)
        this.planCount++
        console.log(this.planCount)
    }
}
lufthansa.book(1234, "Manoj")


const indigo = {
    name:"Indigo",
    flightCode:'IND',
    bookings:[],
    planCount: 100,

}


const book = lufthansa.book

// book.call(indigo, 5089, "Shivu")
// console.log(indigo.bookings)

// console.log(book(1234, "Sanju"))



// The Apply method

// const args = [2345, "Mangala"]

// // book.apply(indigo, args)
// book.call(indigo, ...args)

// The bind 

// It "returns a whole new function" with "this" keyword set to desired object


// Partial applications
// const bookInd = book.bind(indigo, 1111)

// bookInd("Dileep")
// bookInd("Shivu")
// bookInd("Raghu")

// using it in addEvent listeners

const btn = document.querySelector('button')

btn.addEventListener('click', lufthansa.buyPlane.bind(indigo))

