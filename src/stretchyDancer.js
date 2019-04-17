var makeStretchyDancer = function(top, left, timeBetweenSteps) {
    makeDancer.call(this, top, left,timeBetweenSteps); 
  };
  makeStretchyDancer.prototype = Object.create(makeDancer.prototype);
  makeStretchyDancer.prototype.constructor = makeStretchyDancer;
  
  makeStretchyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  var stretchy = function (){
    this.$node.css("width", "+=1");
    }
    setInterval(stretchy.bind(this), this.timeBetweenSteps/10);
};
  
  
    