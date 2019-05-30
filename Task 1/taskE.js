// Е) Создать свою реализацию функции reduce для массивов

Array.prototype.reduce = function(callback, initializer, accumulator) {
    accumulator = initializer === undefined ? 0 : initializer;
  
    for (let i = 0; i < this.length; i++) {
      accumulator = callback(accumulator, this[i]);
    }
    return accumulator;
  }

// tests

console.log([1,2,3].reduce(function(memo, item) { return memo + item; }));
console.log([1,2,3].reduce(function(memo, item) { return memo + item; }, 10));