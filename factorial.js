// var factorial = 1;
// for(var i =1; i<=10; i++){
//     factorial = factorial*2
//     console.log(factorial);
// }

    // function factorial(n) {
    //     var factorial = 1;
    //     for(var i=1; i <=n; i++){
    //         factorial = factorial * i;
    //     }
    //     return factorial;
    // }
    // var result = factorial(10);
    // console.log(factorial);



    /// recursive factorial 


function factorial(n) {
    if (n == 0){
        return 1;
    }
    else{
        return  n * factorial(n-1);
    }
}
var result = factorial(10);
console.log(result);
