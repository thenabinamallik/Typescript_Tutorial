"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
    // return "hello"
}
function getUpper(val) {
    return val.toUpperCase();
}
function sigupUser(name, email, ispaid) { }
var loginUser = function (name, email, ispaid) {
    if (ispaid === void 0) { ispaid = false; }
};
addTwo(5);
getUpper("nabin");
sigupUser("Nabina", "nabina2gmail.com", false);
loginUser("Nabina", "nabina@gmail.com");
function getValue(myVal) {
    if (myVal > 5) {
        return true;
    }
    return "200 OK";
}
var getHello = function (s) {
    return "";
};
var heros = ["thor", "spiderman", "ironman"];
// const heros = [1,2,3]
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleError(errmsg) {
    throw new Error(errmsg);
}
