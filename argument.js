
// function getFullName(firstName, lastName){
//     const fullName = firstName + ' ' + lastName;
//     return fullName;
// }
// const result = getFullName('ASM', 'Rafid');
// console.log(result);

function getFullName(firstName, lastName){
    console.log(arguments); // joto parameter thakok sob dakha jbe ..
    const fullName = firstName + ' ' + lastName;
    return fullName;
}
// const result = getFullName('ASM', 'Rafid');
// console.log(result);

const result = getFullName('ASM', 'Rafid','mostafa','asm');
console.log(result);