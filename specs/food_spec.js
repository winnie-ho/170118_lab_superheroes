var assert = require("assert");
var Food = require("../food");

describe("food", function(){
  beforeEach(function(){ 
    pizza = new Food("pizza", 100);
  });

  it ("food should have name and repVal", function(){
    assert.equal("pizza", pizza.name);
    assert.equal(100, pizza.repVal);
  });

});