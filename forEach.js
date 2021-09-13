const favorite = new Map();
favorite.set('name', 'ASM Rafid');
favorite.set('job', 'Web developer');
favorite.set('color', 'Red');
console.log(favorite);


for (let [key, value] of favorite.entries()) {
    console.log('key is : ${key} and the value is : ${value}');
}



//favorite.forEach((value, key) => console.log('key is : ${key} and the value is : ${value}'));