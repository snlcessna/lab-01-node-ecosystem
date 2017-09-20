'use strict';

const arithmetic = require('../lib/arithmetic.js');

var assert = require('assert');

describe('arithmetic', function(){
  it('this returns proper use of add', function(){
    assert.equal(5, arithmetic.add(2, 3));
  });
  it('this returns improper use of add', function(){
    assert.equal(null, arithmetic.add('larry', 5));
  });
  it('this returns proper use of sub', function(){
    assert.equal(2, arithmetic.sub(3, 1));
    });
  it('this returns improper use of sub', function(){
    assert.equal(null, arithmetic.add('larry', 5));
    });
});
