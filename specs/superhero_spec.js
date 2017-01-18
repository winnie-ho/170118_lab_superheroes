var assert = require("assert");
var Superhero = require("../superhero");
var Food = require("../food");
var Rat = require("../rat");
var Weapon = require("../weapon");



describe("superhero", function(){
  beforeEach(function(){
    superman = new Superhero("Superman", 100, "pizza", null);
    cheese = new Food("cheese", 5);
    pizza = new Food("pizza", 10);
    rat1 = new Rat();
    sword = new Weapon("sword", 55);
  });

  it("superhero has attributes", function(){
    assert.equal("Superman", superman.name);
    assert.equal(100, superman.health);
    assert.equal("pizza", superman.favFood);
  });

  it("superhero can talk", function(){
    assert.equal("I am Superman", superman.talk());
  });

  it("superhero can eat to increase health", function(){
    superman.eat(cheese);
    assert.equal("105", superman.health)
  });

  it("favFood increases health by 1.5x", function(){
    superman.eat(pizza);
    assert.equal("115", superman.health)
  });

  it("superhero loses health eating poisonous food", function(){
    rat1.touchFood(cheese);
    assert.equal(true, cheese.poisoned);
    superman.eat(cheese);
    assert.equal(95, superman.health);
  })

  it("superhero loses health eating poisonous favourite food", function(){
    rat1.touchFood(pizza);
    assert.equal(true, pizza.poisoned);
    superman.eat(pizza);
    assert.equal(85, superman.health);
  })

  it("superhero loses health if suffering an attack", function(){
    superman.suffer();
    assert.equal(80, superman.health);
  })

  it("superhero regenerates max health after sleep", function(){
    superman.sleep();
    assert.equal(100, superman.health);
  })

  it("superhero can collect weapon", function(){
    superman.collectWeapon(sword);
    assert.equal(1, superman.weaponArray.length);
    assert.equal("sword", superman.weaponArray[0].name)
  })

  it("superhero can select weapon from weaponArray", function(){
    superman.collectWeapon(sword);
    superman.selectWeapon(sword);
    assert.equal("sword", superman.weaponInUse.name);
  })


});