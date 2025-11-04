//Type Inference in TypeScript

// TypeScript infers types based on the assigned values
let inferredString = "Hello, TypeScript!"; // inferred as string
let inferredNumber = 42; // inferred as number
let inferredBoolean = true; // inferred as boolean
let inferredArray = [1, 2, 3]; // inferred as number[]
let inferredObject = { name: "Alice", age: 30 }; // inferred as { name: string; age: number; }
let inferredFunction = (x: number) => x * 2; // inferred as (x: number) => number

// Type inference with union types
let inferredUnion = Math.random() > 0.5 ? "A string" : 100; // inferred as string | number  


// Type inference with any type
let inferredAny;
inferredAny = "Could be anything"; // inferred as any
inferredAny = 12345; // still inferred as any


// Type inference with unknown type
let inferredUnknown: unknown;
inferredUnknown = "Could be anything";
inferredUnknown = 12345;

// Function return type inference
function add(a: number, b: number) {
    return a + b; // inferred return type is number
}
console.log(inferredString, inferredNumber, inferredBoolean, inferredArray, inferredObject, inferredFunction(5), inferredUnion, inferredAny, inferredUnknown, add(10, 20));


// Type inference with conditional types
type IsString<T> = T extends string ? "Yes" : "No";
type Test1 = IsString<string>; // inferred as "Yes"
type Test2 = IsString<number>; // inferred as "No"   


// Type inference with mapped types
type Readonly<T> = {
    readonly [P in keyof T]: T[P];
};
type Person = { name: string; age: number; };
type ReadonlyPerson = Readonly<Person>; // inferred as { readonly name: string; readonly age: number; }
let readonlyPerson: ReadonlyPerson = { name: "Bob", age: 25 };
// readonlyPerson.age = 30; // Error: Cannot assign to 'age' because it is a read-only property
console.log(readonlyPerson);  


// Type inference with generics
function identity<T>(arg: T): T {
    return arg;
}
let output1 = identity<string>("Hello"); // inferred as string
let output2 = identity<number>(100); // inferred as number
console.log(output1, output2);  


// Type inference with default type parameters
function createArray<T = number>(length: number, value: T): T[] {
    return Array.from({ length }, () => value);
}
let numberArray = createArray(3, 42); // inferred as number[]
let stringArray = createArray<string>(2, "Hello"); // inferred as string[][]
console.log(numberArray, stringArray);  


// Type inference with tuple types
let inferredTuple = [1, "two", true] as const; // inferred as readonly [1, "two", true]
console.log(inferredTuple);


// Type inference with template literal types
type Greeting<T extends string> = `Hello, ${T}!`;
let greet: Greeting<"World"> = "Hello, World!"; // inferred as "Hello, World!"
console.log(greet);


// Type inference with keyof operator
type PersonKeys = keyof Person; // inferred as "name" | "age"
let key: PersonKeys = "name";
console.log(key);


// Type inference with conditional types in functions
function isString<T>(value: T): value is T & string {
    return typeof value === "string";
}
let unknownValue: unknown = "A string value";
if (isString(unknownValue)) {
    console.log(unknownValue.toUpperCase()); // inferred as string
} else {
    console.log("Not a string");
}


// Type inference with async functions
async function fetchData(): Promise<string> {
    return "Data fetched";
}   
fetchData().then(data => console.log(data));


// Type inference with destructuring
let { name: personName, age: personAge } = inferredObject; // inferred as string and number
console.log(personName, personAge);


// Type inference with rest parameters
function sum(...numbers: number[]): number {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
