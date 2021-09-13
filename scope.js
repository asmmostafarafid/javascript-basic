let bonus = 12;


function sum(first, second) {
    let result = first + second + bonus;
    console.log(result);
    return result;
}

const output = sum(55, 88);
console.log(bonus);
console.log(output);