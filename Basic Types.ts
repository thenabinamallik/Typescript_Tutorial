// Number type annotation
let num: number = 42;

// Array type annotation
let a: number [] = [1,2,3,4,5] 

// Touple type annotation
let b: [string, number] = ['hello', 10];

// Enum type annotation
enum Color {
    Red,
    Green,
    Blue
}
let c: Color = Color.Green;

enum StatusCode {
    Success = 200,
    NotFound = 404,
    ServerError = 500
}
let status: StatusCode = StatusCode.NotFound;

// Any type annotation
let d: any = 5;
d = "Now I'm a string"; 
d = true; // Now a boolean

// Void type annotation
function logMessage(message: string): void {
    console.log(message);
}   
logMessage("This is a log message.");

// Null and Undefined type annotation
let e: null = null;
let f: undefined = undefined;
console.log(a, b, c, d, e, f);

//Unknown type annotation
let g: unknown = 10;
g = "A string now";
g = { key: "value" };

//Never type annotation
function throwError(message: string): never {
    throw new Error(message);
}

//union type annotation
let h: number | string;
h = 25;
h = "A string value";

//intersection type annotation
interface Person {
    name: string;
}
interface Employee {
    employeeId: number;
}   
type Staff = Person & Employee;
let i: Staff = { name: "Alice", employeeId: 12345 };        

// Never type annotation example usage
// Uncommenting the following line will throw an error
// throwError("This is a critical error!");

