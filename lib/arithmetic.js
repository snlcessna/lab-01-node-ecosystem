'use strict';


module.exports = {
  add: function(a,b) {
    if(typeof a !== 'number' || typeof b !== 'number') return null;
    return a+b;
  },
  sub: function(a,b) {
    if(typeof a !== 'number' || typeof b !== 'number') return null;
    return a-b }
}
