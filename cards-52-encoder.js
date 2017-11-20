'use strict'

const CardEncoder = require('./lib/encoder.card')
const CardsEncoder = require('./lib/encoder.cards')
const { CARD_NOT_PRESENT } = CardEncoder

/**
 * Creates a encoder that encodes/decodes one card.
 *
 * @name cardEncoder
 *
 * @param {Number}[idx=0] index in the bits at which the encoded card is located
 * @returns {CardEncoder} a card encoder with `encode(String card)` and `decode(Number bits)` methods
 */
function cardEncoder(idx = 0) {
  return new CardEncoder([ idx ])
}

/**
 * Creates a encoder that encodes/decodes a specific number of cards.
 *
 * @name cardsEncoder
 *
 * @param {Number} n the number of cards to encode/decode
 * @param {Number}[idx=0] index in the bits at which the encoded cards are located
 * @returns {CardsEncoder} a card encoder with `encode(String cards)` and `decode(Number bits)` methods
 */
function cardsEncoder(n, idx = 0) {
  return new CardsEncoder([ idx ], n)
}

module.exports = { cardEncoder, cardsEncoder, CARD_NOT_PRESENT }
