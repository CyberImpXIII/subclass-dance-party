var makeShrinkyDancer = function(top, left, timeBetweenSteps) {
    makeDancer.call(this, top, left,timeBetweenSteps); 
    this.$node.addClass("shrinky-dancer")
  };
  makeShrinkyDancer.prototype = Object.create(makeDancer.prototype);
  makeShrinkyDancer.prototype.constructor = makeShrinkyDancer;
  
  makeShrinkyDancer.prototype.step = function() {
    this.$node.css("width", "100");
    this.$node.css("height", "100");
    makeDancer.prototype.step.call(this);
      var shrinky = function (){
          this.$node.css("width", "-=1");
          this.$node.css("height", "-=1");
      }
      setInterval(shrinky.bind(this), this.timeBetweenSteps/100);
  };