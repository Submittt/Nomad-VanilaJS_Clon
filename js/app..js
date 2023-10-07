// const carculator = {
//    plus : function(a,b) {
//     return a+b;
//    },
//    minus : function(a,b){
//     return a-b;
//    },
//    multiple : function(a,b){
//     return a*b;
//    },
//    divide : function(a,b){
//     return a/b;
//    },
//    power : function(a,b){
//     return a**b;
//    }
// };

// const plusResult = carculator.plus(6,9);
// const minusResult = carculator.minus(plusResult,20);
// const multipleResult = carculator.multiple(minusResult,5);
// const divideResult = carculator.divide(multipleResult,2);
// const powerResult = carculator.power(divideResult,2);


const age = parseInt(prompt("How old are you?"));

if (isNaN(age) || age < 0) {
   console.log("Please write a real positive number.");
} else if (age < 18) {
   console.log("You are too young.");
} else if (age >= 18 && age <= 50) { 
   console.log("You can drink");
} else if (age > 50 && age <=80) {
   console.log("You should exercise");
} else if (age === 100){
   console.log("Wow you are wise!!");
} else if (age > 80) {
   console.log("You can do whatever you want.");
}