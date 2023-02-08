let tasks: Array<string> = [];
console.log("");

function addTask(task: string): number 
{
    let y: number;
    tasks.push(task);
    console.log("_________________ NEW TASK ADDED _________________");
    console.log("Task " + task + " inserted in the list");
    y=tasks.length;
    return y;
}

function listAllTasks()
{
    console.log("");
    console.log("START: Items on list");
    console.log("");
    tasks.forEach(function(task) {
    console.log(task);
    });
    console.log("");
    console.log("END: Items on list");
    console.log("");
}


// D. Create a function to delete a task, you must find the task inside
// the array and delete it.
function deleteTask(x: string): number{
let key: string = x;
let index: number = tasks.indexOf(key, 0);
//https://www.tutorialspoint.com/typescript/typescript_array_indexof.htm