function split(arr) {
  let half = 0
  if(arr.length%2 === 1){
    half = (arr.length -1) / 2;
  } else {
    half = arr.length / 2;
  }
  let firstHalf = arr.slice(0, half);
  let secondHalf = arr.slice(half, arr.length);

  return [firstHalf, secondHalf];
}

function merge(arr1, arr2){
  let finalArr = [];

  while(arr1.length && arr2.length){
    if (arr1[0] < arr2[0]){
      finalArr.push(arr1[0]);
      arr1 = arr1.slice(1);
      // slice takes O(n) time - better to use a pointer
    } else {
      finalArr.push(arr2[0]);
      arr2 = arr2.slice(1);
    }
  }

  if (arr1.length){
    return finalArr.concat(arr1);
  } else {
    return finalArr.concat(arr2);
  }
}

function mergeSort(array){
  if (array.length < 2){
    return array
  }

  let splitArray = []
  splitArray = split(array)
  return merge(mergeSort(splitArray[0]), mergeSort(splitArray[1]))
}





// function split(array) {

//   let middle = Math.floor(array.length / 2);
//   let firstHalf = array.slice(0, middle);
//   let secondHalf = array.slice(middle);

//  return [firstHalf, secondHalf];
// }

// const merge = (firstHalf, secondHalf) => {
//     let temp = [];

//   while (firstHalf[0] && secondHalf[0]) {
//      if (firstHalf[0] > secondHalf[0]) {
//       temp.push(secondHalf.shift());
//      } else
//       temp.push(firstHalf.shift());
//     }

//     return temp.concat(firstHalf).concat(secondHalf);
// }

// function mergeSort(wholeArray){

//   if (wholeArray.length<2){
//     return wholeArray
//   }

//   let returnedArray = []
//   returnedArray = split(wholeArray)

//   return merge(mergeSort(returnedArray[0]), mergeSort(returnedArray[1]))
// }
