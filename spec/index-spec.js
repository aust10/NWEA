const converted = require('./flatten')

describe('Test suit runs', () => {
  it('Runs the file properly', () => {
    expect(true).toBe(true)
  })
})

describe('Converted function return the proper value', () => {
  it('Runs converted function to flatten a 2d array', () => {
    const value = converted([['3.1', [2]], 'b', 3.3, [4, 5], 10, [7, 8], 9])
    const value2 = converted([1, 2, [9, 10], 25, 900, [5]])
    expect(value).toEqual({
      flattened: [
        '3.1', 2, 'b',
        3.3, 4, 5,
        10, 7, 8,
        9
      ],
      high: 10,
      low: 2
    })
    expect(value2).toEqual({
      flattened: [
        1, 2, 9, 10, 25, 900, 5
      ],
      high: 900,
      low: 1
    })
  })
})
