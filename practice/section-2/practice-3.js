'use strict';

function countSameElements(collection) {
  var resultCollection = [];
  var collectionTemp = [];
  var times = 0;
  for (var i = 0; i < collection.length; i++) {
    if (collectionTemp.indexOf(collection[i]) == -1 && collection[i].length == 1) {
      collectionTemp.push(collection[i]);
    } else if (collectionTemp.indexOf(collection[i][0]) == -1 && collection[i].length > 1) {
      collectionTemp.push(collection[i][0]);
    }
  }
  for (var i = 0; i < collectionTemp.length; i++) {
    for (var j = 0; j < collection.length; j++) {
      if (collectionTemp[i] == collection[j]) {
        times++;
      } else if (collection[j].length > 1 && collectionTemp[i] == collection[j][0] && (collection[j].indexOf('-') >= 0 || collection[j].indexOf(':') >= 0)){
        times = times + parseInt(collection[j][2]);
      } else if (collection[j].length > 1 && collectionTemp[i] == collection[j][0] && collection[j].indexOf('[') >= 0) {
        times = times + parseInt(collection[j].slice(2, -1));
      }
    }
    resultCollection.push({name: collectionTemp[i], summary: times});
//    if (collectionTemp[i].length > 1 && (collectionTemp[i].indexOf('-') >= 0 || collectionTemp[i].indexOf(':') >= 0)) {
//      if (resultCollection[collectionTemp[i][0]] == undefined) {
//        resultCollection.push({name: collectionTemp[i][0], summary: parseInt(collectionTemp[i][2])});
//      }
//        resultCollection[collectionTemp[i][0]] += parseInt(resultCollection[collectionTemp[i][2]]);
//    } else if (collectionTemp[i].length > 1 && collectionTemp[i].indexOf('[') {
//      if (resultCollection[collectionTemp[i][0]] == undefined) {
//        resultCollection.push({name: collectionTemp[i][0], summary: parseInt(collectionTemp[i].slice(2, -1))});
//      } else {
//        resultCollection[collectionTemp[i][0]] += parseInt(collectionTemp[i].slice(2, -1));
//      }
//    } else {
//      resultCollection.push({name: collectionTemp[i], summary: times});
//    }
    times = 0;
  }
  console.log(resultCollection);
  return resultCollection;
}
