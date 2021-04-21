const math = require('./math.js')

describe('Math operations tests', () => {
  test('10 + 1 = 11', () => {
    expect(math.sum(10, 1)).toBe(11)
  })
  test('15 - 10 = 5', () => {
    expect(math.sub(15, 10)).toBe(5)
  })
  test('10 * 1 = 10', () => {
    expect(math.mul(10, 1)).toBe(10)
  })
  test('10 / 1 = 10', () => {
    expect(math.div(10, 1)).toBe(10)
  })
  test('division by 0 = null', () => {
    expect(math.div(15, 0)).toBe(null)
  })
})
