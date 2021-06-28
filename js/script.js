// slice() - это метод с помощью которого можно получить какую то часть из всего массива.
// splice() - это метод который имеет несколько функций  "1. start;  2. count; 3.adding new Element"
// Array.isArray() - этот метод определяет является ли данная переменная массивом или нет, если да то она возвращает true
// indexOf() - это метод который определяет индекс
// concat() - это метод который конкатинирует массивы между собой
// trim() = метод который убирает пробелы


























// var slicedArr = arr.slice(20 , 5)
// console.log(arr)
// console.log(slicedArr)




// var arrs = ['Nurik' , 'omurbek', 'Vika' , 'Diana', 'Jasur']



// var newArr = arrs.splice(2 , 3 , 'Almaz')


// console.log(arrs)
// console.log(newArr)










var arr = [
    {
        name:'Sugar',
        price:50
    },
    {
        name:'Sugar',
        price:50
    },
    {
        name:'Sugar',
        price:50
    },
    {
        name:'Sugar',
        price:50
    },
    {
        name:'Sugar',
        price:50
    },
    {
        name:'Sugar',
        price:50
    },
    {
        name:'Sugar',
        price:50
    },
    {
        name:'Sugar',
        price:50
    },
    {
        name:'Sugar',
        price:50
    },
    {
        name:'Sugar',
        price:50
    },
    {
        name:'Sugar',
        price:50
    },
    {
        name:'Sugar',
        price:50
    },
    {
        name:'Sugar',
        price:50
    },
    {
        name:'Sugar',
        price:50
    },
    {
        name:'Sugar',
        price:50
    },
    {
        name:'Sugar',
        price:50
    },
    {
        name:'Sugar',
        price:50
    },

    {
        name:'Sugar',
        price:50
    },
    {
        name:'Sugar',
        price:50
    },
    {
        name:'Sugar',
        price:50
    },
    {
        name:'Sugar',
        price:50
    }
]

// var obj = {
//     name:'Alex',
//     wife:'Tany'
// }


// console.log(Array.isArray(arr))



// var arrs = ['Nurik', 'Vika' , 'Diana' , 'Muni']

// console.log(arrs.indexOf('Nurik'))

// console.log(arrs.concat(1,2,3,4))


// var a = prompt('Name')
// var b = prompt('SurName')

// var obj = {
//     name: a.trim(),
//     password: a.trim()
// }



// console.log(obj)




// function greenFild(a,b) {
//     alert(`Hello ${a} , You are ${b}`)
// }

// greenFild(prompt('name') , prompt('rassa'))


// const greenFild = (a , b) =>{
//     alert(`Hello ${a} , and wow ${b}`)
// }



// greenFild(prompt() , prompt())

// var t = 15;

// const greenFild = (a,b) => alert(`Hello ${a} and ${b}`)



// let t = 15;


// const greenFild = temp => temp > 10 ? alert('Warm') : temp < 10 ? alert('Cold') : alert('Вполне пригодная погода')


// greenFild(t)


const greenFild = (firstName, lastName) => firstName === 'Alex' && lastName === 'Pashov' ? alert('Welcome') : alert('Error')


greenFild(prompt('name'), prompt('Lastname'))