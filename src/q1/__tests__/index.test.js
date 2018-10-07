const last = require('../index.js');

describe('last', () => {
  it('should returns 5 when array contains [1,2,3,4,5]', () => {
    expect(last.call([1, 2, 3, 4, 5])).toBe(5)
  })

  it('should returns "undefined" when array is empty', () => {
    expect(last.call([])).toBe(undefined)
  })
})
