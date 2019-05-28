/* А) Создать кнопку по нажатию на которую в консоль выведет фразу ‘Hello World’ с задержкой в 5 секунд, при повторном нажатии 
в течении 5 секунд время должно пойти заново*/

const dButton = document.getElementById('dButton');

function debounce(func, time) {
	return function (args) {
		let previousCall = this.lastCall;
		this.lastCall = Date.now();
		if (previousCall && ((this.lastCall  -  previousCall) <= time)) {
			clearTimeout(this.lastCallTimer);
		}
		this.lastCallTimer = setTimeout(() => func(args), time);
	}
}

dButton.addEventListener('click', debounce(() => console.log('Hello World'), 5000))

// Б) Создать кнопку по нажатию на которую будет выводить в консоль ‘You are welcome! ’ каждые 3 секунды, пока не нажмем на кнопку еще раз


const button = document.getElementById('tButton');
let timerId;

button.addEventListener('click', () => {
	if (timerId) {
		clearInterval(timerId);
	  	timerId = undefined;
	} else {
		timerId = setInterval(()=>console.log('You are welcome!'), 3000);
	}
})


/* В) Создать кнопку по нажатию на которую будет выводить фразу seconds  +‘ seconds’, где seconds – 
это количество секунд через которое появится фраза. Это значение должно быть случайно выбрано от 1 до 4 секунд. 
Сообщения должны прерваться по повторному нажатию
*/

const thirdButton = document.getElementById('button_3');

thirdButton.addEventListener('click', () => {
	const random = Math.floor(Math.random() * 4) + 1;
	timerId_2 = setTimeout(()=>console.log(`${random} seconds`), random * 1000);
})


/* Г) Создать поле для ввода текста которое будет выводить в консоль введённый текст, через 1 
секунду после того как пользователь перестал печатать */

const input = document.getElementById('input')

input.addEventListener('input', debounce(() =>  {
	let val = input.value;
	console.log(val);
}, 1000));



