import addNumbers, { addStrings, getName } from "./functions";
import tamina from "./functions";
// console.log(addNumbers(1, 2));

// console.log(addStrings("a"));

// console.log(getName({ first: "jack", last: "herrington" }));
console.log(addStrings("a", "23"));

let aes,name = addStrings("1","31")

console.log(typeof(aes), aes, name)

let has:boolean = true;
let numeroko:number= 41243;

console.log(numeroko += 31231)

let myregex: RegExp = /wad/;

let names: string[] = ['username', 'porgi'];

// console.log(names[1])

const myvalue: Array<string> = names



interface Person{
	10:string;
	20:string;
	30:string;
	name:boolean;
	// tamina:
}
let testing: Person={
	10 : 'name',
	20 : 'name',
	30:	'name',
	name : false,
};
testing[30] = '600';
testing.name = false;
console.log(testing[30])
console.log(testing['name'])

let ids: Record<number, string>={
	10:"a",
	20:"vb",
	30:"aasdf",
	8541:'asd',
}

// console.log(ids[10])

const a = ():string =>"ang kuletsulet"
const b =()=>a()
function c(){return "ang kuletsulet"} 
console.log(a(),b(),c())
