module.exports = {
  sum: (a, b) => parseInt(a, 10) + parseInt(b, 10),
  sub: (a, b) => a - b,
  mul: (a, b) => a * b,
  div: (a, b) => (b === 0 ? null : a / b),
}
