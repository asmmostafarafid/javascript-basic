function add(num1, num2){
    console.log([...arguments])
    return num1 * num2 * arguments[2];
}
const sum = add(20, 30 ,3);
console.log(sum);