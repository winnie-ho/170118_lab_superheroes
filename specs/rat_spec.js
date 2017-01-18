var assert = require("assert");
var Rat = require("../rat");
var Food = require("../food");

describe("rat", function(){
  beforeEach(function(){
    rat1 = new Rat();
    pizza = new Food("pizza", 10);
  });

  it("rat can touch food", function(){
    console.log(pizza.poisoned);

    rat1.touchFood(pizza);

    console.log(pizza.poisoned);
    assert.equal(true, pizza.poisoned);
  })
})