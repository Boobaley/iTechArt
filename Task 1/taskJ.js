//  Ж )С помощью функции reduce получить максимальное значение в массиве var ratings = [2,3,1,4,5];

var ratings = [2, 3, 1, 4, 5];

const newRatings = ratings.reduce((prev, cur) => biggest = prev > cur ? prev : cur)

console.log(newRatings);
