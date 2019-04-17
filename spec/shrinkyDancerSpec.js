describe('shrinkyDancer', function() {

    var shrinkyDancer, clock;
    var timeBetweenSteps = 100;
  
    beforeEach(function() {
      clock = sinon.useFakeTimers(); 
      
      shrinkyDancer = new makeShrinkyDancer(10, 20, timeBetweenSteps);
    });
  
    it('should have a jQuery $node object', function() {
      expect(shrinkyDancer.$node).to.be.an.instanceof(jQuery);
    });
  
    it('should have a step function that makes its node shrink', function() {
      sinon.spy(shrinkyDancer.$node, 'toggle');
      shrinkyDancer.step();
      setTimeout(function(){expect(shrinkyDancer.$node.css("width")).to.be.below(100)}, 10);
    });
  }); 
  