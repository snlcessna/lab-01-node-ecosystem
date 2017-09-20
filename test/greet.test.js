'use strict';

const greet = require('../lib/greet.js');

var assert = require('assert');

describe('greet', function(){
  it('this returns null when presented a non-string', function(){
    assert.equal(null, greet(12));
  });
  it('this expects the greet module to return hello world', function(){
    assert.equal('Hello world', greet('world'));
  });
});
