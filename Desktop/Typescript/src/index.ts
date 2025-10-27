// function sum (a:number,b: number){
// 	return a+b
// }

// console.log(sum(1.1,2.3));

interface Person{
	name:string,
	age:number,
	greet:()=>string
}

let person:Person={
	name:"govardhan",
	age:25,
	greet:()=>{return "hi"}
}