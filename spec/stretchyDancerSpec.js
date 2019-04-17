describe('stretchyDancer', function() {

    var stretchyDancer, clock;
    var timeBetweenSteps = 100;
  
    beforeEach(function() {
      clock = sinon.useFakeTimers(); 
      
      stretchyDancer = new makeStretchyDancer(10, 20, timeBetweenSteps);
    });
  
    it('should have a jQuery $node object', function() {
      expect(stretchyDancer.$node).to.be.an.instanceof(jQuery);
    });
  
    it('should have a step function that makes its node stretch', function() {
      sinon.spy(stretchyDancer.$node, 'toggle');
      stretchyDancer.step();
      setTimeout(function(){expect(stretchyDancer.$node.css("width")).to.be.above(10)}, 10);
    });
  }); 
  