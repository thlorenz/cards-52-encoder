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


## License

MIT
