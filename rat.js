var Rat = function(){

}

Rat.prototype = {
  touchFood: function(food){
    food.poisoned = true;
  }
}
module.exports = Rat;

