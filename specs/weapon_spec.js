var assert = require("assert");
var Weapon = require("../weapon");

describe("weapon", function(){
  beforeEach(function(){
    sword = new Weapon ("sword", 55);
  })

  it("weapon has attributes", function(){
    assert.equal("sword", sword.name);
    assert.equal("55", sword.power);
  })
})