# fd-elem

[![Build Status](https://travis-ci.org/fp-dom/fd-elem.svg)](https://travis-ci.org/fp-dom/fd-elem) [![npm version](https://badge.fury.io/js/fd-elem.svg)](http://badge.fury.io/js/fd-elem)
> Create DOM elements FP-style!

## Installation

`npm install fd-elem --save`

## Usage

```js
import elem from 'fd-elem';

let div = elem('div');

let greetDiv = div('Hello FD!');

document.body.appenChild(greetDiv);

// it's curried out of the box, you could also do:

elem('div', 'div\'s content');

```

## API

`elem :: (tagName, content)`

* `tagName` -> string: type of element to be created. 

* `content` -> string: Contents of the newly created element.
