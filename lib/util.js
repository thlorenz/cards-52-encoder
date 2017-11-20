'use strict'

function maskForBits(n) {
  return (0b1 << n) - 1
}

function isolate(bits, idx, len) {
  return (bits >> idx) & maskForBits(len)
}

module.exports = { maskForBits, isolate }
