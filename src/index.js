/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
	var lengthArray = preferences.length; 
	var count = 0;  
  for (var i = 0; i<lengthArray; i++) { 
      var nextItem = preferences[i] - 1;
      if (nextItem == i) continue;
      var nextnext = preferences[nextItem] - 1;
      if (nextItem == nextnext) continue;
      var nextnextnext = preferences[nextnext] - 1;
      if (nextnextnext == nextnext) continue;
      if (nextnextnext == i) {
          count++;
      }
   }
   return count / 3;
};
