//Accessing data from json requires 2 methods 
//1) JSON.parse(data) Method

let jsonRes = '{"fact": "Hot water will turn into ice faster than cold water."}';
let validRes = JSON.parse(jsonRes);
console.log(validRes.fact);