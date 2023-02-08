//Boolean
let coin: boolean = true;
console.log("Boolean Value is: " + coin);

//String
let module: string = "AppDevelop";
console.log("String Value is: " + module);

//Number
let num1: number = 25;
console.log("Number Value is: " + num1);

//Array
//let years = [2019, 2020, 2021];
let years:number[] = [2019, 2020, 2021];

for(let i = 0; i < years.length; i++)
{
    console.log("Array Value " + (i+1) + " is: " + years[i]);
}

//Unsure of Datatype - Generic
let notSure:any = "Not Sure Datatype";
console.log("Array Value of NotSure is: " + notSure);

//Array-unknown type 
let unknown:any[] = [2, "hello", false];

for(let i = 0; i < years.length; i++)
{
    console.log("No Type Array Value " + (i+1) + " is: " + unknown[i]);
}