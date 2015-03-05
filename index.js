"use strict";

var curry2 = require("fj-curry").curry2;


var _elem = function (element, content) {
     var newElem = document.createElement(element);
     var contentNode = document.createTextNode(content);
     newElem.appendChild(contentNode);
     return newElem;
};


module.exports = curry2(_elem);