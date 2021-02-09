import { countries } from './countries'
import { webTechs } from './web_techs'
console.log(countries)
console.log(webTechs)

function findItem(list, item) {
    let listLength = list.length
    for (let i=0; i<listLength; i++) {
        if (list[i] == item) {
            return i
        }
    }

    return false
}

function doTheJob(list, isItemOnList, printMessage, itemToAdd) {
    if (isItemOnList) {
        console.log(printMessage)
    } else {
        list.push(itemToAdd)
    }
    console.log(list)
}
let countryItem = 'Ethiopia', webTechItem = 'Sass'
let isItemOnList = findItem(countries, countryItem)
doTheJob(countries, isItemOnList, 'ETHIOPIA', countryItem)


isItemOnList = findItem(webTechs, webTechItem)
doTheJob(webTechs, isItemOnList, 'Sass is a CSS preprocess', webTechItem)

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
let fullStack = frontEnd.concat(backEnd)
console.log(fullStack)