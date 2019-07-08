'use strict';

function createUpdatedCollection(collectionA, objectB) {
  for (var i = 0; i < collectionA.length; i++) {
    if (objectB.value.indexOf(collectionA[i].key) >= 0) {
      var num = parseInt(collectionA[i].count / 3);
      collectionA[i].count -= num;
    }
  }
  console.log(collectionA);
  return collectionA;
}
