let a = []
let b = [1,2,3,4,5,6]
let bLength = b.length
let firstItem = b.shift()
let lastItem = b.pop()
let middleItem = b[2]
let mixedDataTypes = [1,{a:1},"there is an story",'a',5,[1,2,3]]
let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM','Oracle and Amazon are big IT companies']
console.log(bLength)
console.log(firstItem)
console.log(lastItem)
console.log(middleItem)
console.log(mixedDataTypes)
console.log(itCompanies.join())
let company
(company = itCompanies.indexOf('IBM'))
    ? console.log(itCompanies[company])
    : console.log('is not found')
let itCompaniesLength = itCompanies.length
let i, findCompany, letters = [], lettersLength, j, countLettersO, companiesWithO = []
for (i=0; i<itCompaniesLength; i++) {
    findCompany = itCompanies[i]
    letters = findCompany.split('');
    lettersLength = letters.length
    countLettersO = 0
    for (j=0; j<lettersLength; j++) {
        if (letters[j] == 'o') {
            countLettersO++
        }
    }
    if (countLettersO > 1) companiesWithO.push(findCompany)
}
console.log(companiesWithO)
// console.log(itCompanies.sort())
// console.log(itCompanies.reverse())
// console.log(itCompanies.slice(0,3))
// console.log(itCompanies.slice(2,4))
console.log('----')
// console.log(itCompanies.slice(3,6))
// console.log(itCompanies)
// console.log(itCompanies)
// console.log(itCompanies.splice(2,2))
// itCompanies.pop()
// console.log(itCompanies)
itCompanies.splice(0,itCompaniesLength)
console.log(itCompanies)
