const last = function() {
  if (this.length === 0) {
    return undefined;
  }

  return this.slice(-1)[0]
}

if (! Array.prototype.last) {
  Object.defineProperty(Array.prototype, 'last', {
    value: last
  })
}

module.exports = last
