// А) Создать свою реализацию функции map для массивов

Array.prototype.map = function(projectionFunction) {
	newArr = [];
	for (let i = 0; i < this.length; i++) {
		newArr.push(projectionFunction(this[i], i, this));
	}
	return newArr;
	};
	
console.log(JSON.stringify([1,2,3].map(function(x) { return x + 1; })) === '[2,3,4]');