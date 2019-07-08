'use strict';

function countSameElements(collection) {
  var resultCollection = [];
  var collectionTemp = [];
  var times = 0;
  for (var i = 0; i < collection.length; i++) {
    if (collectionTemp.indexOf(collection[i]) == -1) {
      collectionTemp.push(collection[i]);
    }
  }
  for (var i = 0; i < collectionTemp.length; i++) {
    for (var j = 0; j < collection.length; j++) {
      if (collectionTemp[i] == collection[j]) {
        times++;
      }
    }
    resultCollection.push({key: collectionTemp[i], count: times});
    times = 0;
  }
  return resultCollection;
}
