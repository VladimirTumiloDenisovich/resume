const delay = (wait = 1000) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
        //resolve()
            reject('Что-то пошло не так')
        }, wait)
    })
    return promise
}

//delay(2500)
//    .then(() => {
//    console.log('After 2 seconds')
//})
//    .catch(err => console.error('Error:', err))
//    .finally(() => console.log('Finally'))

const getData = () => new Promise(resolve => resolve([1, 1, 2, 3, 5, 8, 13
]))

//getData().then(data => console.log(data))

async function asyncExample() {
    try {
    await delay(3000)
    const data = await getData()
    console.log('Data', data)
    } catch (e) {
        console.log(e)
} finally {
    console.log('Finally ')
}
}

asyncExample()


//const delay = (callback, wait = 1000) => {
//    setTimeout(callback, wait)
//}
//
//delay(() => {
//    console.log('After 2 seconds')
//}, 2000)


//const timeout = setTimeout(() => {
//    
//    console.log('After timeout')
//}, 2500)
//
//clearTimeout(timeout)


//const interval = setInterval(() => {
//    console.log('After timeout')
//}, 1000)
//
//clearInterval(interval)




//const cars = ['Мазда', 'Ford', 'BMW', 'Mersedes']
//const fib = [1, 1, 2, 3, 5, 8, 13]
//
//const person = {
//    name: 'Vladelen',
//    age: 26,
//    isProgrammer: true,
//    languages: ['ru', 'en', 'es'],
////    'compex key': 'Complex Value',
////    ['key_' + (1 + 3)]: 'Computed Key', //key_4
//    greet() {
//        console.log('greet from person')
//    },
//    info() {
////    console.log('this', this)
//    console.info(' Информация про человека по имени:', this.name)
//}
//} 
//
//
//const logger = {
//    keys() {
//        console.log('Object Keys: ', Object.keys(this))
//    },
//    keysAndValues() {
//        Object.keys(this).forEach((key) => {
//            console.log(key + ':',this[key])
//        })
//    },
//    withParams(top = false, between = false, bottom = false) {
//        if (top) {
//            console.log('------ Start ------')
//        }
//        Object.keys(this).forEach((key, index, array) => {
//            console.log(key + ':',this[key])
//            if (between && index !== array.length - 1) {
//                console.log('------------')
//            }
//        })
//        if (bottom) {
//            console.log('------ End ------')
//        }
//    }
//}

//logger.keysAndValues.call(person)
//logger.withParams.call(person, true, true, true)

//logger.withParams.apply(person, [true, true, true])


//const bound = logger.keys.bind(person)
//bound()
//logger.keys.call(person)


//person.info()




//for (let key in person) {
//    if (person.hasOwnProperty(key)) {
//        console.log('key', key)
//        console.log('value', person[key])
//    }
//}
//
//Object.keys(person).forEach((key) => {
//    console.log('key', key)
//    console.log('value', person[key])
//})




//const name = person.name
//const age = person.age
//const languages = person.languages
//
//const {name, age: personAge = 10, languages} = person

//console.log(person.name)
//const ageKey = 'age'
//console.log(person[ageKey])
//console.log(person["compex key"])
//
//console.log(person)
//person.greet()
//
//person.age++
//person.language.push('by')
//console.log(person[ageKey])
//
//person['key_4']
//delete person['key_4']

//const people = [
//    {name: 'Vladimir', budget: 4200},
//    {name: 'Elena', budget: 3500},
//    {name: 'Victoria', budget: 1700}
//]

//const sumBudget = people
//.filter(person => person.budget >2000)
//.reduce((acc, person) => {
//    acc += person.budget
//    return acc
//}, 0)
//
//console.log(sumBudget)


//const pow2 = num => num ** 2
//
//const pow2Fib = fib.map(pow2)
//const filteredNumbers = pow2Fib.filter(num => num > 20)
//
//console.log(pow2Fib)
//console.log(filteredNumbers)




//const upperCaseCars = cars.map(car => {
//    return car.toUpperCase()
//})
//
//console.log(upperCaseCars)
//console.log(cars)
//
//const pow2 = num => num ** 2
//const sqrt = num => Math.sqrt(num)
//
//const pow2Fib = fib.map(pow2).map(sqrt)
//console.log(pow2Fib)

//console.log(cars.includes('Мазда'))

//Добавление и изъятие из массива
//cars.push('Reno')
//cars.unshift('Volga') 
//const firstCar = cars.shift()
//const lastCar = cars.pop()
//
//console.log(firstCar)
//console.log(lastCar)
//console.log(cars)

//console.log(cars)
//console.log(cars.reverse())
//console.log(cars)

//findIndex
//const index = people.findIndex(function(person){
//    return person.budget === 3500
//})
//

//const person = people.find(function(person){
//    return person.budget === 3500
////})
//const person = people.find(person => person.budget === 3500)
//console.log(person)
//
//let findedPerson
//for (const person of people) {
//    if (person.budget === 3500) {
//        findedPerson = person
//    }
//}
//
//console.log(findedPerson)

//indexOf
//console.log(cars.indexOf('BMW'))
//const index = cars.indexOf('BMW')
//cars[index] = 'Porsche'
//console.log(cars)

//Переворот строки 2 способами
//const text = ('Hello World!')
//
//const reverseTextArray = text.split('').reverse().join('')
//
//const reverseTextWhile = (text) => {
//    let i= 0
//    let result= ''
//    while (i < text.length) {
//        result= text[i] + result
//        i++
//    }
//    return result
//}
//
//console.log(reverseTextArray)
//console.log(reverseTextWhile(text)) 