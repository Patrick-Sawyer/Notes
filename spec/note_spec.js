// describe('adder', () => {
//   it('adds two numbers', () => {
//     expect(adder(1, 2)).toBe(3)
//   })
//   it('returns a number', () =>{
//     expect(adder(1, 2)).toBeAnInstanceOf(Number);
//   })
// })

describe('adder', function() {
  it('adds two numbers', function() {
    expect(adder(1, 2)).toBe(3);
  })
  it('returns a number', function() {
    expect(adder(1, 2)).toBeAnInstanceOf(Number);
  })
})


// describe('array', () => {
//   it('is an array', () => {
//     expect(array).toBeAnInstanceOf(Array);
//   })
// })

describe('array', function(){
  it('returns true', function(){
    expect(array).toBeAnInstanceOf(Array);
  })
})


