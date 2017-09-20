// const add = (a, b )=> {
//     //console.log(arguments) .. doesnt work 
//     return a + b;
// };

// //this keyword -- no longer bound

// const user = {
//     name: 'Jon',
//     cities: ['phillidelphia', 'New York'],
//     printPlacesLived(){
//        const cityMessages = this.cities.map((city) => {
//             return city + "!";
//         });
//         console.log(cityMessages[0]);
//         // console.log(this.cities); //[this referes to closet object i.e user]
//         // this.cities.forEach((city) => {
//         //     console.log(this.name + ' has lived in ' + city)
//     }
// }

// console.log(user.printPlacesLived())


//Challange Area

const multiplier = {
    nums: [1, 2 ,3 ,4],
    multiplyBy: 10,
    multiply(){
        return this.nums.map((num) => num * this.multiplyBy)
    }
};

console.log(multiplier.multiply())
