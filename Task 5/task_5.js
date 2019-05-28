// 1) Что не так с этим кодом? Предложить исправленную версию.

//  loadVideosAsync().then(function(videos) {
//     loadMetaAsync().then(function(meta) {
//          DoSomething(videos, meta);
//     });
// });

Promise.all([loadVideosAsync(), loadMetaAsync()]).then(result => DoSomething(result[0], result[1]));

// 2)
//  function anAsyncCall() {
//     var promise = doSomethingAsync();
//     promise.then(function() {
//         somethingComplicated();
//     });
//     return promise;
// };

function anAsyncCall() {
	return new Promise(resolve => {
 		doSomethingAsync().then(() => resolve(somethingComplicated()));
	});
};

doSomethingAsync().then(() => somethingComplicated());

// 3) 
// db.getAllDocs().then(function (result) {
//   result.rows.forEach(function (row) {
//     db.remove(row.doc);  
//   });
// }).then(function () {
//   // All docs must be removed!
// });


db.getAllDocs().then(function (result) {
    return new Promise(resolve => {
        result.rows.forEach(function (row) {
            db.remove(row.doc);  
          });
          resolve();
    })
  }).then(function () {
    // All docs must be removed!
  });
  
//   4)
  // doAsync().then(function () {
  //   throw new Error('nope');
  // }, function (err) {
  //   // I didn't catch your error! :(
  // });
  
  doAsync().then(function () {
    throw new Error('nope');
  }).catch(function (err) {
    // I didn't catch your error! 
  });