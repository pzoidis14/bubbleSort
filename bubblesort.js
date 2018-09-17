function bubbleSort(array) {
  if (array.length <= 1){
    return array
  }

  let swapCount = 0;

  for (let i = 0; i<array.length; i++){
    if (!array[i+1] && swapCount){
      swapCount = 0
      return bubbleSort(array)
    }

    if (array[i] > array[i+1]){
      swapCount++;
      swap(array, i);
    }
  }
  return array
}

function swap(array, index){
  let tempVar = array[index];
  array[index] = array[index+1];
  array[index+1] = tempVar;
}
