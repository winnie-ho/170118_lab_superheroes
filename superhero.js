var Superhero = function(name, health, favFood, weaponInUse){
  this.name = name;
  this.health = health;
  this.favFood = favFood;
  this.weaponArray = new Array();
  this.weaponInUse = weaponInUse;
}

Superhero.prototype = {
  talk: function(){
    return ("I am " + this.name);
  },

  eat: function(food){
    if(food.name === this.favFood && food.poisoned === false){
      this.health += (food.repVal * 1.5);
    } 
    else if (food.name != this.favFood && food.poisoned === false){
      this.health += food.repVal; 
    }
    else if (food.name === this.favFood && food.poisoned === true){
      this.health -= (food.repVal * 1.5);
    }
    else if (food.name!= this.favFood && food.poisoned === true){
      this.health -= food.repVal;
    }
  },

  suffer: function(){
    this.health -= 20;
    this.weaponArray.pop();
  },

  sleep: function(){
    this.health = 100;
  },

  collectWeapon: function(weapon){
    this.weaponArray.push(weapon);
  },

  selectWeapon: function(selectedWeapon){
    for (var weapon of this.weaponArray) {
      if (selectedWeapon.name === weapon.name) {
        this.weaponInUse = selectedWeapon;
      }
      else{
        return "weapon unavailable"
      }
    }
  }

};

module.exports = Superhero;