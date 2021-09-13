const nums = [17, 21, 55, 88];
nums.map(num => num * 2);
nums.filter(num => num > 20);
nums.find(num => num > 23);
const total = nums.reduce((sum, num) => sum + num , 0)

const man =[
    {name : "Pashed" , money: 100},
    {name : "Rashed" , money: 484},
    {name : "Nashed" , money: 56489},
    {name : "Dashed" , money: 5878},
    {name : "Tashed" , money: 7987}
];

const final = friends.reduce( (sum, friend) => sum + friend.money, 0)

console.log(final);   