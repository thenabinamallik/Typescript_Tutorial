// Interfaces and Type Aliases
// . Defining an interface
// . Using interface to define object shapes
// . Extending interfaces
// . Type aliases for primitive and complex types
// . Union and intersection types with type aliases


interface User {
    id: number;
    name: string;
    surname?: string; // optional property (?)
    email: string;
}

function getUserInfo(user: User): string {
    return `User Info: ID=${user.id}, Name=${user.name}, Email=${user.email}`;
}

const user: User = {
    id: 1,
    name: "John Doe",
    email: "john@example.com"
};

console.log(getUserInfo(user));

// Extending interfaces
interface Admin extends User {
    role: string;
}
const admin: Admin = {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    role: "superadmin"
};
console.log(getUserInfo(admin), `Role=${admin.role}`);

// Type Aliases
type ID = number | string;
type Coordinates = {
    x: number;
    y: number;
};
function printCoordinates(coord: Coordinates): void {
    console.log(`X: ${coord.x}, Y: ${coord.y}`);
}
const point: Coordinates = { x: 10, y: 20 };
printCoordinates(point);
type Status = "active" | "inactive" | "pending";
let userStatus: Status = "active";
console.log(`User status is ${userStatus}`);
userStatus = "pending";
console.log(`User status changed to ${userStatus}`);

// Type Aliases with Intersection Types
type Person = {
    name: string;   
    age: number;
};

type Employee = Person & {  
    employeeId: number;
};

const employee: Employee = {
    name: "Alice Johnson",
    age: 28,
    employeeId: 12345
};
console.log(`Employee: ${employee.name}, Age: ${employee.age}, ID: ${employee.employeeId}`);

// or
type value = string | number | boolean;
let userId: value;
userId = 101;
userId = "user_101";
userId = true;
console.log(`User ID: ${userId}`);

// Union and Intersection Types with Type Aliases
type AdminUser = User & { adminLevel: number; };
const superAdmin: AdminUser = {
    id: 3,
    name: "Super Admin",
    email: "example@hello.com",
    adminLevel: 10
};
console.log(`Admin User: ${superAdmin.name}, Level: ${superAdmin.adminLevel}`);

// or
type Response = 
    | { status: "success"; data: any; } 
    | { status: "error"; error: string; };  
function handleResponse(response: Response): void {
    if (response.status === "success") {
        console.log("Data:", response.data);
    } else {
        console.log("Error:", response.error);
    }
}
const successResponse: Response = { status: "success", data: { message: "Operation completed." } };
const errorResponse: Response = { status: "error", error: "Something went wrong." };
handleResponse(successResponse);
handleResponse(errorResponse);
// or
type Alpha = { a: string; };
type Beta = { b: number; };
type Gamma = Alpha & Beta;
const gammaObj: Gamma = { a: "Hello", b: 42 };
console.log(`Gamma Object: a=${gammaObj.a}, b=${gammaObj.b}`);
// or
type Shape = 
    | { kind: "circle"; radius: number; } 
    | { kind: "square"; sideLength: number; };      
function area(shape: Shape): number {   
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.sideLength ** 2;
    }           
}
const myCircle: Shape = { kind: "circle", radius: 5 };
const mySquare: Shape = { kind: "square", sideLength: 4 };
console.log(`Circle Area: ${area(myCircle)}`);
console.log(`Square Area: ${area(mySquare)}`);