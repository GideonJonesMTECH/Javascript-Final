function sort(list) {
 let arrLength = list.length;
 if(arrLength == 0) {
  return [];
 }
 for (let i = 0; i < arrLength; i++) {
  let min = list[i];
  for (let j = i+1; j < arrLength; j++) {
   if (list[j] < min) {
    let temp = list[j];
    list[j] = min;
    list[i] = temp;
    min = temp;
   }
  }
 }
 return list;
}
