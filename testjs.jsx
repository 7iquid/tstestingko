// function ars;
 

function c(
	numbers,
	callback)
{
	return numbers.map(callback);
} 

console.log(c([1,2,3],(v)=> v*10));
console.log([1,2,3].map((v)=>v*10));



