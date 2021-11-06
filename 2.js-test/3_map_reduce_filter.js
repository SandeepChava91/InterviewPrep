const arr = [
    {firstname: 'akshay', lastname:'saini', age:26},
    {firstname: 'elon', lastname:'musk', age:51},
    {firstname: 'donald', lastname:'trump', age:75},
    {firstname: 'deepika', lastname:'padukone', age:26},
];

const output = arr.reduce((acc, cur)=>{
    if(cur.age<30){
        acc.push(cur.firstname);
    }

    return acc;
}, []);

console.log(output);