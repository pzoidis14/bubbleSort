describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    // your code here
    expect (split([1,6,4,8,2,7,5,3])).toEqual([[1,6,4,8],[2,7,5,3]])

    expect (split([1,6,4,8,2,7,5,3,9])).toEqual([[1,6,4,8],[2,7,5,3,9]])


  });
});

  describe('Merge Array function', function() {
    it('is able to merge sorted array into a single array', function() {
      // your code here
      expect (merge([1,4,6,8],[2,3,5,7])).toEqual([1,2,3,4,5,6,7,8])

      expect (merge([1,4,6,8],[2,3,5,7,9])).toEqual([1,2,3,4,5,6,7,8,9])


  });
 });

 describe('MergeSort function', function() {
  it('is able to sort an array', function() {
    // your code here
    expect (mergeSort([1,4,6,8,2,3,5,7])).toEqual([1,2,3,4,5,6,7,8])

    expect (mergeSort([1,4,6,8,2,3,5,7,9])).toEqual([1,2,3,4,5,6,7,8,9])


});
});
