const stringName = document.querySelector('#name')
const colors = ['#FF0000', '#FF8000', '#FFFF00', '#80FF00', '#0080FF', '#0000FF', '#8000FF']
const startName = document.querySelector('#name').textContent
let randomArray = [0, ]

//Разворот
Object.prototype.getReverseF = function() {
    let rev = this.split('').reverse().join('')
    return rev
}

const getReverse = () => {
    setTimeout(() => {
        stringName.textContent = stringName.textContent.getReverseF()
    }, 500) 
}

//Рандомное написание слова
function getRandomArbitrary(min, max) {
    let number = Math.random() * (max - min) + min
  return Math.round(number)
 }

 const getRandomArray = function(text) {
    let i = 0
    randomArray = []
    let ran = getRandomArbitrary(0, text.length - 1)
    while (i < text.length) {
        if (randomArray.includes(ran) === false) {
            randomArray.push(ran)
            ran = getRandomArbitrary(0, text.length - 1)
            i++
        } else if (randomArray.includes(ran) === true) {
            ran = getRandomArbitrary(0, text.length - 1)
        }
    }
    return randomArray
}

Object.prototype.getRandomF = function() {
    let i = 0
    let result = ''
    let ran = getRandomArray(this)
    while (i < this.length) {
        result = result + this[ran.shift()]
        i++
    }
    result = result.toLowerCase().split('')
    if (result.indexOf(' ') !== result.length - 1) {
    result[result.indexOf(' ') + 1] = result[result.indexOf(' ') + 1].toUpperCase()
    }  
    if (result.indexOf('-') !== result.length - 1) {   
    result[result.indexOf('-') + 1] = result[result.indexOf('-') + 1].toUpperCase()
    }
    if (result.indexOf('-') !== result[0]) {
    result[0] = result[0].toUpperCase()
    }
    if (result.indexOf(' ') !== result[0]) {
    result[0] = result[0].toUpperCase()
    }
    return result.join('')
}

const getRandom = () => {
    setTimeout(() => {
        stringName.textContent = stringName.textContent.getRandomF()
    }, 500)
}

//Начальное значение
const getStart = () => {
    setTimeout(() => {
        stringName.textContent = startName
    }, 500)
}

//toCamelCase
const toText = ('A-C-D')
//the_stealth_warrior
//The-Stealth-Warrior
function toCamelCase(str){
    let result = ''
    for (i = 0; i < str.length; i++) {
        if (str[i] === ' ' & i !== str.length - 1) {
            result+= str[i + 1].toUpperCase()
          i++
        } else if (str[i] === '-' & i !== str.length -1) {
            result+= str[i + 1].toUpperCase()
          i++
        } else if (str[i] === '_' & i !== str.length -1) {
            result+= str[i + 1].toUpperCase()
          i++
        } else {
            result+= str[i]
        }
    }
    return result
}
console.log(toCamelCase(toText))



        // if (str.indexOf(' ') !== str.length - 1) {
        //     result+= str[str.indexOf(' ') + 1].toUpperCase()
        //     i++
        //     i++
        // }