(function(){

  angular
       .module('story')
       .controller('StoryController', [
          '$firebaseArray',
          '$timeout',
          '$mdToast',
          StoryController
       ]);

  /**
   * Story Controller
   * @constructor
   */
  function StoryController($firebaseArray,$timeout,$mdToast) {
    
    // Display toast to user
    var storyToast = $mdToast.simple()
    					.capsule(true)
    					.position('bottom right')
    					.textContent('Help build our story by adding new events!')
    					.action('Ok')
    					.highlightAction(true)
    					.hideDelay(0);
    $timeout( function(){ $mdToast.show(storyToast); }, 500 );
    
    // Initialize event list
    var eventRef = new Firebase(FIREBASE_URL+'events'),

  		eventList = $firebaseArray(eventRef),

  		animateElementIn = function($el) {
		    $el.removeClass('hidden');
		    $el.addClass('animated bounce-in'); // this example leverages animate.css classes
	  	},

	  	animateElementOut = function($el) {
		    $el.addClass('hidden');
		    $el.removeClass('animated bounce-in'); // this example leverages animate.css classes
	  	},

	  	compare = function(a,b) {
			return new Date(a.date).getTime() - new Date(b.date).getTime();
	  	},

	  	isEven = function(n) {
		   return n % 2 == 0;
		};

	  	self = this;
    	self.animateElementIn = animateElementIn;
    	self.animateElementOut = animateElementOut;     	

    	eventList.$watch(function() { 
	  		eventList.sort(compare);
	  		var ctr = 0,
	  			events = [];
	  		eventList.forEach(function(e){
	  			var timelineEvent = {
	  				title: e.name,
	  				content: e.description,
	  				when: new Date(e.date).toLocaleDateString("en-US")
	  			};
	  			// Add photo
	  			if (e.url){
	  				timelineEvent.titleContentHtml = '<img class="timeline-image" src="' + e.url + '"/>';
	  			}
	  			if (isEven(ctr)){
	  				timelineEvent.badgeClass = 'danger';
	  				timelineEvent.badgeIcon = 'favorite';
	  			}
	  			else{
	  				timelineEvent.badgeClass = 'info';
	  				timelineEvent.badgeIcon = 'local_florist';
	  			}
	  			events.push(timelineEvent);
	  			ctr++;
	  		})
	  		self.events = events;
	  	});
  }

})();
