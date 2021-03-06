# cards-52-encoder [![build status](https://secure.travis-ci.org/thlorenz/cards-52-encoder.svg?branch=master)](http://travis-ci.org/thlorenz/cards-52-encoder)

Encodes and decodes playing cards of a 52 card deck

```js
const sixbit = require('6bit-encoder')
const { cardsEncoder } = require('../')
const cards = [ '2d', '5c', 'Js', '8h', 'Ad' ]

const encoder = cardsEncoder(5)
const encodedBits = encoder.encode(cards)
const encoded = sixbit.encode5(encodedBits)
const decodedChars = sixbit.decode5(encoded)
const decoded = encoder.decode(decodedChars)

console.log({ encoded, decoded })

// => { encoded: '2OFbo', decoded: [ '2d', '5c', 'Js', '8h', 'Ad' ] }
```

## Installation

    npm install cards-52-encoder

## [API](https://thlorenz.github.io/cards-52-encoder)

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### cardEncoder

Creates a encoder that encodes/decodes one card.

**Parameters**

-   `idx` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)?** index in the bits at which the encoded card is located (optional, default `0`)

Returns **CardEncoder** a card encoder with `encode(String card)` and `decode(Number bits)` methods

### cardsEncoder

Creates a encoder that encodes/decodes a specific number of cards.

**Parameters**

-   `n` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** the number of cards to encode/decode
-   `idx` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)?** index in the bits at which the encoded cards are located (optional, default `0`)

Returns **CardsEncoder** a card encoder with `encode(String cards)` and `decode(Number bits)` methods

### CARD_NOT_PRESENT

A 2 char string indicating a _non present_ card as `'??'`.

Type: [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

### CardEncoder.encode

Encodes a card.

The idx is taken into account so that an `|` operation allows including
the encoded information into existing bits.

**Parameters**

-   `card` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** the card to encode

Returns **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** the bits representing that card

### CardEncoder.decode

Decodes a card.

The idx is taken into account so that the card can be decoded from within
anywhere inside the given bits.

**Parameters**

-   `allBits` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** the bits in which a card is encoded

Returns **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** the decoded card

### CardsEncoder.encode

Encodes a number of cards.

The idx is taken into account so that an `|` operation allows including
the encoded information into existing bits.

**Parameters**

-   `cards` **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)>** the cards to encode

Returns **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** the bits representing the cards

### CardsEncoder.decode

Encodes a number of cards.

The idx is taken into account so that an `|` operation allows including
the encoded information into existing bits.

**Parameters**

-   `allBits` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** the bits in which the cards are encoded

Returns **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)>** the decoded cards

## License

MIT
