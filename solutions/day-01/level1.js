var a = [];
var b = [1, 2, 3, 4, 5, 6];
var bLength = b.length;
var firstItem = b.shift();
var lastItem = b.pop();
var middleItem = b[2];
var mixedDataTypes = [1, { a: 1 }, "there is an story", 'a', 5, [1, 2, 3]];
var itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle and Amazon are big IT companies'];
console.log(itCompanies.join());
var company;
(company = itCompanies.indexOf('IBM'))
    ? console.log(company)
    : console.log('is not found');
