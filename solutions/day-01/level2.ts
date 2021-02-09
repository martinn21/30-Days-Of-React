let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let punctuation = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';

function removePunctuation(myText) {
    return myText.split('')
        .filter(function(letter) {
            return punctuation.indexOf(letter) === -1;
        })
        .join('');
}

let textNoPunctuation = removePunctuation(text)
console.log(textNoPunctuation)
let numberOfWordsFromText = textNoPunctuation.split(' ').length
console.log(numberOfWordsFromText)

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
if (shoppingCart.indexOf('Meat') == -1) {
    shoppingCart.unshift('Meat')
}
console.log(shoppingCart)
if (shoppingCart.indexOf('Sugar') == -1) {
    shoppingCart.push('Sugar')
}
console.log(shoppingCart)

function removeItemFromCar(car, itemCar) {
    return car.filter(function(element){
        return element != itemCar;
    });
}

let allergic = true, newCar
if (allergic) {
    newCar = removeItemFromCar(shoppingCart, 'Honey')
}
console.log(newCar)

function arrayElement (car, itemCar) {
    let carLength = car.length
    for (let i=0; i<carLength; i++) {
        if (car[i] == itemCar) {
            return i;
        }
    }

    return null
}

let index = arrayElement(shoppingCart, 'Tea');

if (index) {
    shoppingCart[index] = 'Green Tea'
}

console.log(shoppingCart)