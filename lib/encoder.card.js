'use strict'

const { isolate } = require('./util')

const ranks = [ 'A', 'K', 'Q', 'J', 'T', '9', '8', '7', '6', '5', '4', '3', '2' ]
const suits = [ 'h', 'c', 'd', 's' ]

/**
 * A 2 char string indicating a _non present_ card as `'??'`.
 *
 * @constant {String} CARD_NOT_PRESENT
 * @default
 */
const CARD_NOT_PRESENT = '??'

const cards = []
const cardIndexes = new Map()
for (const r of ranks) {
  for (const s of suits) {
    const idx = cards.length
    const card = r + s
    cards.push(card)
    cardIndexes.set(card, idx)
  }
}
cardIndexes.set(CARD_NOT_PRESENT, cards.length)
cards.push(CARD_NOT_PRESENT)

// 52 different cards, so we need 6 bits to encode one == one 6bit char
class CardEncoder {
  /**
   * Instantiates a CardEncoder
   *
   * @name CardEncoder
   * @private
   *
   * @param {Array} args array with the index at which to start decoding `[ idx ]`
   * @returns {CardEncoder} instance
   */
  constructor([ idx ]) {
    this._idx = idx
  }

  /**
   * Encodes a card.
   *
   * The idx is taken into account so that an `|` operation allows including
   * the encoded information into existing bits.
   *
   * @name CardEncoder.encode
   *
   * @param {String} card the card to encode
   * @returns {Number} the bits representing that card
   */
  encode(card) {
    if (card == null || !cardIndexes.has(card)) card = CARD_NOT_PRESENT
    const bits = cardIndexes.get(card)
    const allBits = bits << this._idx
    return allBits
  }

  /**
   * Decodes a card.
   *
   * The idx is taken into account so that the card can be decoded from within
   * anywhere inside the given bits.
   *
   * @name CardEncoder.decode
   *
   * @param {Number} allBits the bits in which a card is encoded
   * @returns {String} the decoded card
   */
  decode(allBits) {
    const bits = isolate(allBits, this._idx, 6)
    return cards[bits]
  }
}

module.exports = CardEncoder
module.exports.CARD_NOT_PRESENT = CARD_NOT_PRESENT
