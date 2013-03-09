var assert = require('assert');
var PhoneFormatter = require('../')

describe('Normalize', function() {
  
  var testFormats = [
    "(212) 555 1212",
    "(212) 555.1212",
    "(212) 555-1212",
    "(212) 5551212",
    "(212)5551212",
    "212 555 1212",
    "212.555.1212",
    "212-555-1212",
    "1-212-555-1212",
    "+1 (212) 555-1212",
    "12125551212",
    "+45 (212) 555-1212",
    "2125551212"
  ]
  
  testFormats.forEach(function(number) {
    it('should be able to parse ' + number, function() {
      assert.deepEqual(
        PhoneFormatter.normalize(number),
        "2125551212"
      );
    });
  });
  
});

describe('Format', function() {
  
  var phoneNumber = "2125551212"
  
  describe('strings', function () {
    
    it('should be able to format numbers with (NNN) NNN NNNN', function() {
      assert.deepEqual(
        PhoneFormatter.format(phoneNumber, "(NNN) NNN NNNN"),
        "(212) 555 1212"
      );
    });
  
    it('should be able to format numbers with (NNN) NNN.NNNN', function() {
      assert.deepEqual(
        PhoneFormatter.format(phoneNumber, "(NNN) NNN.NNNN"),
        "(212) 555.1212"
      );
    });
  
    it('should be able to format numbers with (NNN) NNN-NNNN', function() {
      assert.deepEqual(
        PhoneFormatter.format(phoneNumber, "(NNN) NNN-NNNN"),
        "(212) 555-1212"
      );
    });
  
    it('should be able to format numbers with (NNN) NNNNNNN', function() {
      assert.deepEqual(
        PhoneFormatter.format(phoneNumber, "(NNN) NNNNNNN"),
        "(212) 5551212"
      );
    });
  
    it('should be able to format numbers with (NNN)NNNNNNN', function() {
      assert.deepEqual(
        PhoneFormatter.format(phoneNumber, "(NNN)NNNNNNN"),
        "(212)5551212"
      );
    });
  
    it('should be able to format numbers with NNN NNN NNNN', function() {
      assert.deepEqual(
        PhoneFormatter.format(phoneNumber, "NNN NNN NNNN"),
        "212 555 1212"
      );
    });
  
    it('should be able to format numbers with NNN.NNN.NNNN', function() {
      assert.deepEqual(
        PhoneFormatter.format(phoneNumber, "NNN.NNN.NNNN"),
        "212.555.1212"
      );
    });
  
    it('should be able to format numbers with NNN-NNN-NNNN', function() {
      assert.deepEqual(
        PhoneFormatter.format(phoneNumber, "NNN-NNN-NNNN"),
        "212-555-1212"
      );
    });
  
    it('should be able to format numbers with 1-NNN-NNN-NNNN', function() {
      assert.deepEqual(
        PhoneFormatter.format(phoneNumber, "1-NNN-NNN-NNNN"),
        "1-212-555-1212"
      );
    });
  
    it('should be able to format numbers with +1 (NNN) NNN-NNNN', function() {
      assert.deepEqual(
        PhoneFormatter.format(phoneNumber, "+1 (NNN) NNN-NNNN"),
        "+1 (212) 555-1212"
      );
    });
  
    it('should be able to format numbers with 1NNNNNNNNNN', function() {
      assert.deepEqual(
        PhoneFormatter.format(phoneNumber, "1NNNNNNNNNN"),
        "12125551212"
      );
    });
    
  });
  
  describe('options', function () {
    
    it('should be able to normalize a phone number before parsing it', function() {
      assert.deepEqual(
        PhoneFormatter.format("(212) 555-1212", "NNN.NNN.NNNN"),
        "212.555.1212"
      );
    });
    
  });
  
});
