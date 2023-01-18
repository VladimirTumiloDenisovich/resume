const stringName = document.querySelector('#name')
const colors = ['#FF0000', '#FF8000', '#FFFF00', '#80FF00', '#0080FF', '#0000FF', '#8000FF']
const text = ('Тумило-Денисович Владимир')
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
            console.log(randomArray)
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
    if (result.indexOf(' ') !== result.length) {
    result[result.indexOf(' ') + 1] = result[result.indexOf(' ') + 1].toUpperCase()
    }  
    if (result.indexOf('-') !== result.length) {   
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
        stringName.textContent = text
    }, 500)
}






//function changeColor() {
//    for (let i = 0; i < 100; i++) {
//        setInterval(rainbow(), 500)
//    }
//}

//function changeColor() {
//    setInterval(rainbow(), 500)
    
//}

//function test() {
//    let s = getRandomArbitrary(0, colors.length - 1)
//    stringName.style.color = colors[s]
//}


//const rainbow = () => {
//    stringName.style.color = 'red'
//}
//
//console.log(stringName[1])

//let i = 0
//let r = 0
//const test = stringName.textContent.toString()
//function rainbow() {
//    while (i < stringName.textContent.length - 1) {
//        if (r <= colors.length - 1) {
//            r++
//            i++
//            return test[1] = colors[r]
//        } else {
//            r = 0
//            i++
//            return stringName.style.color = colors[r]
//        }
//        }
//}


//function rainbow() {
//    
//    while (i < stringName.textContent.length - 1) {
//        stringName.style.color = colors[r]
//        i++
//        r++
//        
//        }
//    }











//const text = 'Просто текст!'
//
////const timer = (string, array) => {
////    let i = 0
////    let r = 0
////    while (i > string.length - 1) {
////    r = getRandomArbitrary(0, array.length - 1)
////    console.log(r)
////    i++
////}
////    return r
////}
//
//function timer(string, array) {
//    let i = 0
//    let r = 0
//    while (i > string.length - 1) {
//        if (r <= array.length - 1) {
//            r++
//            console.log(r)
//            console.log(string)
//            i++
//        } else {
//            r = 0
//        }
//}
//    return r
//}
//
//
//console.log(getRandomArbitrary(0, colors.length - 1))
//console.log(timer('Hello!', [1, 0, 5, 23]))
// timer('Hello!', [1, 0, 5, 23])