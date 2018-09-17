describe('Bubble Sort', function(){

  beforeEach(function () {
    spyOn(window, 'swap').and.callThrough();
  });

  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('returns a single element array', function(){
    expect( bubbleSort([7]) ).toEqual( [7] );
  });

  it('sorts an array with multiple elements', function(){
    expect( bubbleSort([5,3,7,4,1,2,6]) ).toEqual( [1,2,3,4,5,6,7] );
    expect( bubbleSort([7,6,5,4,3,2,1]) ).toEqual( [1,2,3,4,5,6,7] );
  });

  it('takes x amount of swaps to get the right order', function(){
    bubbleSort([5,3,7,4,1,2,6]);
    expect(swap.calls.count()).toEqual( 12 );
    bubbleSort([7,6,5,4,3,2,1]);
    expect(swap.calls.count()).toEqual( 33 );
  });
});
