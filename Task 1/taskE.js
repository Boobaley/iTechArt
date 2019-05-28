// Е) Создать свою реализацию функции reduce для массивов

Array.prototype.reduce = function(combiner, initialValue) {
	let accumulator = (initialValue === undefined) ? undefined : initialValue;
    for (let i = 0; i < this.length; i++) {
        if (accumulator !== undefined)
            accumulator = combiner.call(undefined, accumulator, this[i], i, this);
        else
            accumulator = this[i];
    }
    return accumulator;
}

// tests

console.log([1,2,3].reduce(function(memo, item) { return memo + item; }));
console.log([1,2,3].reduce(function(memo, item) { return memo + item; }, 10));