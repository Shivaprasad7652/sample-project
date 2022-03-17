// short circuit 
// to evaluate the expressions for && and ||or truthy and falsy values

// var myName = 'shivu';
// var yourName = ' ';
// var newName = myName && yourName;
// console.log(newName);


// if(null || undefined || 0 || "Manoj" || null || "Sanju" || 55){
//     console.log("Working")
// }

// apiData = ""

// originalData = apiData || "Manoj"

// console.log(originalData)

// if(null || undefined || 0 || "Manoj" || null || "Sanju" || 55){
//     console.log("Working")
// }

// apiData = "sanju"

// originalData = apiData && "Manoj"

// console.log(originalData)


// nulish colasing operator (??)-
// it is a logical operator
// nulish colasing operator
// left expression ?? right expression 
//  return the right expression if the left expression is null or undefined 
// let input;
// input = null;
// input = undefined;
//  const name =  input ?? 'enter anything';
// //const name =  40 ?? 'enter anything';  
//  console.log( name );


//  enhanced object litrals
// 
// var x=10;
// var y=5;
// const mul={
//     x,y
// };
// console.log(mul);


// Optional Chaining..
// console.log(a)
// const restuarant = {
//     menu:{
//         starter:['Pizza','idli','vada'],
//         lunch:['meals','roti']
//     },
//     openingHours:{
//         mon:{open:"8AM",close:"10PM"},
//         tues:{open:"7AM",close:"10PM"},
//         wed:{open:"11AM",close:"10PM"},
//         sat:{open:"8.30AM",close:"10PM"},
//         fri:{open:0, close:"10pm"}
//     },
//     order: function(starter, lunch){
//         return [this.menu.starter[starter], this.menu.lunch[lunch]]
//     }
// }


// // console.log(restuarant.openingHours?.fri?.open ?? "12PM")
// // console.log(restuarant.order?.(0,1))


// // Looping objects

// // console.log(Object.keys(restuarant))
// // const keys = Object.keys(restuarant)
// // console.log(`we ore open on ${Object.keys(restuarant.openingHours).length} days`)
// // for(keyy of Object.keys(restuarant.openingHours)){
// //     console.log(keyy)
// // }

// const objValue = Object.values(restuarant.openingHours)
// console.log(objValue)

// console.log(Object.entries(restuarant.openingHours))

// for([day, {open, close}] of Object.entries(restuarant.openingHours)){
//     console.log(`On ${day} we are open at ${open} and closing at ${close}`)
// }

const str = "My name is Manoj"

console.log(str.slice(-6))
console.log(str.split("a"))

console.log(str)

const gem = "And the name is Yash"
console.log(gem.slice(-6))
console.log(gem.split("n"))

console.log(gem)

const rush = "He is the man of million hearts"
console.log(rush.slice(-4))
console.log(rush.split("i"))

console.log(rush)

console.log('Manoj'.charCodeAt('3'));
console.log('Manoj'[3]);
