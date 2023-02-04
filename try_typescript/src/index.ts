const message: string = "Hello, TypeScript";
console.log(message);
const name2: string = "My Name!"
const age: number = 20
const weight: number = 50.25
const bigNum: bigint = 9007199254740991n
const isOpen : boolean = true
const disabled : boolean = false
const list: number[] = [1, 2, 3]
const noValue1 : undefined = undefined
const noValue2 : null = null
function sayHello(name:string):string{return `Hello ${name}!`}
const sayHello2 : (name: string)=> string = (name) => { return `Hello ${name}!`}
const noReturn: ()=> void = (): void =>{
	console.log('no return');
}
