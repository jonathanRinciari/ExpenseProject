// const square = function (x) {
//     return x * x;
// }

// console.log(square(8));

//  const squareArrow = (x) => {
//      return x * x;
//  ;}

// const squareArrow = (x) => x * x;



// console.log(squareArrow(9));

const fullName = "Jon Rinciari"


const getFirstName = (fullName) => {
    return fullName.split(' ')[0];
};

console.log(getFirstName(fullName));


const getLastName = (fullName) => fullName.split('i')[1];

console.log(getLastName(fullName));
