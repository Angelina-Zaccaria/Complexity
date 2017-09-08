var chai    = require("chai");
var assert = chai.assert,
    expect = chai.expect;
var main = require("../analysis.js");

describe("Sanity check", function() {
  describe("runs", function() {
    it("doesn't crash", function() {
       main.complexity("analysis.js")
    });
  });


  // describe("fuzzer works", function() {
  //   it("mutate string", function() {
  //       expect(main.complexity("analysis.js")).to.not.throw();
  //       assert.()
  //   });
  // });
});