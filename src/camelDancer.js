var makeCamelDancer = function(top, left, timeBetweenSteps) {
    makeDancer.call(this, top, left,timeBetweenSteps); 
    this.$node.addClass("camel-dancer")
  };
  makeCamelDancer.prototype = Object.create(makeDancer.prototype);
  makeCamelDancer.prototype.constructor = makeCamelDancer;
  
  makeCamelDancer.prototype.step = function() {
    this.$node.css("width", "100");
    this.$node.css("height", "100");
    makeDancer.prototype.step.call(this);
      var camel = function (){
          var direction = 'left';
          console.log(this.direction)
          if( direction === 'left'){
            this.$node.css("left", "-=1");

          }else if (direction === 'right'){
              this.$node.css('left', '+=1'); 
          } if (this.$node.css("left") === 0){
              direction = 'right';
          };
      }
      setInterval(camel.bind(this), this.timeBetweenSteps/100);
  };