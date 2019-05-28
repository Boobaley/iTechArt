// З) С помощью функций map, reduce, вывести url у которого самая большая площадь

var boxarts = [{
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
    }, {
    width: 425,
    height: 150,
    url: "http://cdn-0.nflximg.com/images/2891/Fracture425.jpg"
    }];

    const newBox = boxarts.map(item => item.url).reduce((prev, cur) => biggest = prev.width * prev.height > cur.width * cur.height ? prev : cur);
    console.log(newBox);
