// В) Создать свою реализацию функции filter для массивов

Array.prototype.filter = function(predicateFunction, context) {
	newArr = [];
	for (let i = 0; i < this.length; i++) {
		if (predicateFunction.call(context, this[i], i, this)) {
			newArr.push(this[i]);
		}
	}
	return newArr;
  };
  
//   tests
  console.log(JSON.stringify([1,2,3].filter(function(x) { return x > 2})));