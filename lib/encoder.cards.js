'use strict'

const assert = require('assert')
const CardEncoder = require('./encoder.card')
const { isolate } = require('./util')

class CardsEncoder {
  /**
   * Instantiates a CardsEncoder
   *
   * @name CardsEncoder
   * @private
   *
   * @param {Array} args array with the index at which to start decoding `[ idx ]`
   * @param {Number} n the number of cards to encode/decode with the encoder
   * @returns {CardsEncoder} instance
   */
  constructor([ idx ], n) {
    this._idx = idx
    this._cardEncoders = []
    this._n = n

    for (var i = 0; i < n; i++) {
      // one card takes up 6 bits
      this._cardEncoders.push(new CardEncoder([ i * 6 ]))
    }
  }

  /**
   * Encodes a number of cards.
   *
   * The idx is taken into account so that an `|` operation allows including
   * the encoded information into existing bits.
   *
   * @name CardsEncoder.encode
   *
   * @param {Array.<String>} cards the cards to encode
   * @returns {Number} the bits representing the cards
   */
  encode(cards) {
    assert.equal(cards.length, this._n, 'amount of cards not matching cards tranlator spec')
    var bits = 0
    for (var i = 0; i < this._n; i++) {
      bits |= this._cardEncoders[i].encode(cards[i])
    }
    const allBits = bits << this._idx
    return allBits
  }

  /**
   * Encodes a number of cards.
   *
   * The idx is taken into account so that an `|` operation allows including
   * the encoded information into existing bits.
   *
   * @name CardsEncoder.decode
   *
   * @param {Number} allBits the bits in which the cards are encoded
   * @returns {Array.<String>} the decoded cards
   */
  decode(allBits) {
    const cards = []
    const bits = isolate(allBits, this._idx, this._n * 6)
    for (var i = 0; i < this._n; i++) {
      cards[i] = this._cardEncoders[i].decode(bits)
    }
    return cards
  }
}

module.exports = CardsEncoder
