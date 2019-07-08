'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var resultCollection = [];
  var collectionTemp = [];
  var times = 0;
  for (var i = 0; i < collectionA.length; i++) {
    if (collectionTemp.indexOf(collectionA[i]) == -1) {
      collectionTemp.push(collectionA[i]);
    }
  }
  for (var i = 0; i < collectionTemp.length; i++) {
    for (var j = 0; j < collectionA.length; j++) {
      if (collectionTemp[i] == collectionA[j]) {
        times++;
      }
    }
    resultCollection.push({key: collectionTemp[i], count: times});
    times = 0;
  }
  for (var i = 0; i < resultCollection.length; i++) {
    if (objectB.value.indexOf(resultCollection[i].key) >= 0) {
      var num = parseInt(resultCollection[i].count / 3);
      resultCollection[i].count -= num;
    }
  }
  console.log(resultCollection);
  return resultCollection;
}
