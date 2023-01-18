//Массивы
//const cars = ['Мазда', 'Мерседес', 'Форд']

//Цикл быстрый
//for (let car of cars) {
//    console.log(car)
//}

//Объекты
//const person = {
//    firstName: 'Vladimir',
//    lastName: 'Tumilo-Denisovich',
//    year: '1990',
//    languages: ['Ru', 'En', 'Es'],
//    hasWife: false,
//    greet: function() {
//        console.log('greet')
//    }
//}
//const carsLength = cars.length
//console.log(carsLength)
//console.log(isFinite(carsLength))
//console.log(isFinite(100))
//console.log(person)


//Пасстановка массива по порядку
//const numbers = [-10, 107, 4, 64, 6, 14, 85, 63, 32, 765, 32, 7, 342, 7, 43, 67];
//const numbersInOrder = []
//
//const getLargeNumber = (array) => {
//    let result = -Infinity
//    for (i = 0; i <= array.length; i++) {
//        if (result <= array[i]) {
//            result = array[i]
//        }
//    }
//    return result
//}
//
//const isLargeNumber = (array) => array === getLargeNumber(numbers)
//
//const getNumbersInOrder = (array) => {
//    let i = 0
//    let getNumbersInOrderProcess = array.length
//    while (i < getNumbersInOrderProcess) {
//        numbersInOrder.unshift(array[array.findIndex(isLargeNumber)])
//        array.splice(array.findIndex(isLargeNumber), 1)
//        i++
//    }
//    return numbersInOrder
//}
//
//console.log(`getNumbersInOrder: ${getNumbersInOrder(numbers)}`)
//console.log(`numbers: ${numbers}`)
//console.log(`getNumbersInOrderReverse: ${numbersInOrder.reverse()}`)

//Рандомное число между заданными целыми числами
//function getRandomBetween(min, max) {
//    return Math.floor(Math.random() * (max - min + 1) + min)
//}
//
//console.log(getRandomBetween(10, 42))