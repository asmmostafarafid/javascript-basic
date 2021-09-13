function addNumber(num1, num2){
    var sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        const num = arguments[i];
        sum = sum + num;
    }
    function logInfo(massage){
        console.log(massage);
    }
    logInfo('Good Morning');
    return sum;
}
var result = addNumber(3,5,6,12,10);
console.log(result);