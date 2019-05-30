// И)  Преобразуйте массив в объект используя функцию reduce. Используйте начальное значение (второй параметр)

var videos = [{
	"id": 65432445,
	"title": "The Chamber"
}, {
	"id": 675465,
	"title": "Fracture"
}, {
	"id": 70111470,
	"title": "Die Hard"
}, {
	"id": 654356453,
	"title": "Bad Boys"
}];

   const newObject = videos.reduce((obj, item) => {
    obj[item.id] = item.title;
    return obj;
   }, {})

console.log(newObject);