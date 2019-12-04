"use strict";
exports.__esModule = true;
function greeter(person) {
    return "Hello, " + person;
}
exports.greeter = greeter;
function arrayToDict(array) {
    var output = {};
    array.forEach(function (val) {
        output[val.id] = val;
    });
    return output;
}
exports.arrayToDict = arrayToDict;
