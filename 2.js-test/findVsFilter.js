const arr = [
    { name: "Bob", age: "32", occupation: "developer" },
    { name: "Bill", age: "17", occupation: "delinquent" },
    { name: "Brad", age: "40", occupation: "yes" },
    { name: "Bob", age: "47", occupation: "Mers" }
];

const findRes = arr.find((e)=>e.name === "Bob");
const filterRes = arr.filter((e)=>e.name === "Bob");

console.log("Find Response - ", findRes);
console.log("Filter Response - ", filterRes);