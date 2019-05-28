var Robot = function (name) {
	this.name = name;
}

function add (op1, op2) {
    this.name = this.name || "Human";
	return  this.name + ' can count to ' + (op1 + op2);
}

var voltron = new Robot("Voltron");

// #1 Выведите результат сложения 0 и 1

console.log(add(0, 1));

// #2 Выведи результат сложения Voltron 1 и 2 используя call
// “Voltron can count 3”

console.log(add.call(voltron, 1, 2));

// #3 Выведи результат сложения Voltron 20 и 30 используя apply
// “Voltron can count 50”

console.log(add.apply(voltron, [20, 30]));

// #4 Выведи результат сложения Voltron «drinking» и «beer» используя bind
// “Voltron can count drinkingbeer”

 const newFunc = add.bind(voltron);
 console.log(newFunc('drinking', 'bear'))
 
    
 // #5 Написанный вами код должен вывести console.log имени которое лежит в this.name пятью разными способами

var showName = function () { 
	setTimeout(() => console.log(this.name), 1000); 
}.bind(voltron);
showName();
 

var showName_2 = function () { 
	setTimeout(() => console.log(this.name), 2000); 
}.call(voltron);


var showName_3 = function () { 
	setTimeout(() => console.log(this.name), 3000); 
}.apply(voltron);


var showName_4 = function () { 
	setTimeout(() => console.log(voltron.name), 4000); 
};
showName_4();

var showName_5 = function(arg) {
	setTimeout(() => console.log(arg.name));
}
showName_5(voltron);
