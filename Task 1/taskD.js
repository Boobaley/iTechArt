 /* Д) Привести данные к указанному виду, boxarts преобразовать в boxart где значение это ссылка на видео размером 
 150х200. Используйте следующие функции filter, map, concat.*/

 var movieLists = [{
	name: "Instant Queue",
	videos: [{
		"id": 70111470,
		"title": "Die Hard",
		"boxarts": [{
			width: 150,
			height: 200,
			url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg"
		}, {
			width: 200,
			height: 200,
			url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg"
		}],
		"url": "http://api.netflix.com/catalog/titles/movies/70111470",
		"rating": 4.0,
		"bookmark": []
	}, {
		"id": 654356453,
		"title": "Bad Boys",
		"boxarts": [{
			width: 200,
			height: 200,
			url: "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg"
		}, {
			width: 150,
			height: 200,
			url: "http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg"
		}],
		"url": "http://api.netflix.com/catalog/titles/movies/70111470",
		"rating": 5.0,
		"bookmark": [{
			id: 432534,
			time: 65876586
		}]
	}]
}, {
	name: "New Releases",
	videos: [{
		"id": 65432445,
		"title": "The Chamber",
		"boxarts": [{
			width: 150,
			height: 200,
			url: "http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg"
		}, {
			width: 200,
			height: 200,
			url: "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg"
		}],
		"url": "http://api.netflix.com/catalog/titles/movies/70111470",
		"rating": 4.0,
		"bookmark": []
	}, {
		"id": 675465,
		"title": "Fracture",
		"boxarts": [{
			width: 200,
			height: 200,
			url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg"
		}, {
			width: 150,
			height: 200,
			url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg"
		}, {
			width: 300,
			height: 200,
			url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg"
		}],
		"url": "http://api.netflix.com/catalog/titles/movies/70111470",
		"rating": 5.0,
		"bookmark": [{
			id: 432534,
			time: 65876586
		}]
	}]
}];

const videosArray = movieLists[0].videos.concat(movieLists[1].videos).map(item => item = {
	id: item.id,
	title: item.title,
	boxart: item.boxarts.filter(item => item.width === 150 && item.height === 200).map(item => item.url)[0]
});

console.log(videosArray);