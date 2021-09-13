"use strict";

function checkLeapYear(year) {
  var leap = new Date(year, 1, 29).getDate() === 29;

  if (leap) {
    console.log(year + ' is a leap year');
  } else {
    console.log(year + 'is not leap year');
  }
}

var year = prompt('Enter a Year: ');
checkLeapYear(year);