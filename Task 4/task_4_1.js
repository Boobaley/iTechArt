// А) Функция должна вывести ‘hi’ через 2 секунды

function delay(duration) {
    return new Promise(resolve => {
        setTimeout(resolve, duration)
    });
}

function logHi() {
    console.log('hi');
}

delay(2000).then(logHi);


// Б) Одна из особенностей Promise, в том что они могут бесконечно вызывать .then()

new Promise(resolve => setTimeout(() => resolve(-10), 3000))
.then((result) => {
    console.log(result)
    return result + 2;
}).then((result) => {
    console.log(result);
    return new Promise(resolve => setTimeout(() => resolve(result + 2), 2000));
}).then((result) => console.log(result));


    
 /* В) Написать Promise который выводит console.log в случае если время выполнения не превысило 2 секунд, и console.error в случае если превысило. 
    Время должно определяться случайным образом, использовать внутренний обработчик ошибок для Promise*/

    
new Promise((resolve, reject) => {
const random = Math.floor(Math.random() * 6);
     if (random <= 2) {
	        resolve(random);
     } else {
         reject(random);
     }
 }).then(result => console.log(result)).catch(error => console.error(error));
 
//  Г)

function getRandom() {
	return Math.round(Math.random() * 10);
}

const promisesNumber = getRandom();
const promises = [];

for(let i = 0; i < promisesNumber; i++) {
	const randomTimeout = getRandom();
	promises.push(
  	new Promise(resolve => setTimeout(() => resolve([i+1, randomTimeout]), randomTimeout * 1000)).then(data => console.log(`Function #${data[0]} executed in ${data[1]} seconds`)));
}

Promise.all(promises).then(result=> console.log(`Well Done all ${promisesNumber} functions are done!`));