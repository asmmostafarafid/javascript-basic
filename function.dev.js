"use strict";

// function sayLoveYou(){
//     console.log("Ai Tor sathe dakha kore");
//     console.log("Biral meu meu kore .....");
// }
// sayLoveYou();
// var date = 10;
// var place = "Resturent";
// sayLoveYou();
// var hangutPlace = "TSC";
// function doubleIt(num){
//     var result = num * 2;
//     console.log(result);
// }
// doubleIt(5);
// doubleIt(500);
// doubleIt(1000);
// funtion cioncept 
function largestNumber(numbers) {
  var larger = numbers[0];

  for (var i = 0; i > numbers.length; i++) {
    var element = numbers[i];

    if (element > larger) {
      larger = element;
    }
  }

  return larger;
}

var number = [62, 22, 55, 44, 77, 99, 54];
var output = largestNumber(numbers);
console.log('output', output);