Array.prototype.myForEach = function (callback) {

    for (let item of this) {
        callback(item)
    }

};
let numbers = [10, 20, 30];

numbers.myForEach(number => {
    console.log(number);
});

Array.prototype.myFilter = function (callback) {
    let result = [];

    for (let item of this) {
        if (callback(item)) {
            result.push(item);
        }
    }
    return result;
};
let result = numbers.myFilter(number => number >= 20);

console.log(result);
