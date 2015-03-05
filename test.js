"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var assert = _interopRequire(require("assert"));

var elem = _interopRequire(require("./"));

var div = elem("div")("Hello World");

it("fd-elem", function () {
  assert.equal(div.innerHTML, "Hello World");
  assert.equal(elem("div", "Test").innerHTML, "Test");
});