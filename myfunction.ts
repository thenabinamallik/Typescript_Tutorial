function addTwo(num: number): number {
  return num + 2;
  // return "hello"
}

function getUpper(val: string) {
  return val.toUpperCase();
}

function sigupUser(name: string, email: string, ispaid: boolean) {}

let loginUser = (name: string, email: string, ispaid: boolean = false) => {};

addTwo(5);
getUpper("nabin");
sigupUser("Nabina", "nabina2gmail.com", false);
loginUser("Nabina", "nabina@gmail.com");

function getValue(myVal: number): boolean | string {
  if (myVal > 5) {
    return true;
  }
  return "200 OK";
}

const getHello = (s: string): string => {
  return "";
};

const heros = ["thor", "spiderman", "ironman"];
// const heros = [1,2,3]

heros.map((hero): string => {
  return `hero is ${hero}`;
});

function consoleError(errmsg: string): void {
  console.log(errmsg);
}

function handleError(errmsg: string): never {
  throw new Error(errmsg);
}

export {};
