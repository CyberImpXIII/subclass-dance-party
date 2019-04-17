
// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {
 
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"></span>');
  this.step();
  this.setPosition(top, left);
  window.dancers.push(this);
  // console.log(window.dancers);
};

makeDancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

makeDancer.prototype.lineup = function() {
  this.$node.css("left", "0");
};

makeDancer.prototype.setPosition = function(top, left) {
  // console.log('herreeeee',this)
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};
   