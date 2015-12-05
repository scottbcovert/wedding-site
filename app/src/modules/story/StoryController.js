(function(){

  angular
       .module('story')
       .controller('StoryController', [
          StoryController
       ]);

  /**
   * Story Controller
   * @constructor
   */
  function StoryController() {
    var self = this;   

    self.events = [
    	{
		    badgeClass: 'info',
		    badgeIcon: 'question_answer',
		    title: 'First heading',
		    content: 'Some awesome content.'
	  	}, 
	  	{
		    badgeClass: 'warning',
		    badgeIcon: 'favorite',
		    title: 'Second heading',
		    content: 'More awesome content.'
	  	},
	  	{
		    badgeClass: 'info',
		    badgeIcon: 'question_answer',
		    title: 'First heading',
		    content: 'Some awesome content.'
	  	}, 
	  	{
		    badgeClass: 'warning',
		    badgeIcon: 'favorite',
		    title: 'Second heading',
		    content: 'More awesome content.'
	  	},
	  	{
		    badgeClass: 'info',
		    badgeIcon: 'question_answer',
		    title: 'First heading',
		    content: 'Some awesome content.'
	  	}, 
	  	{
		    badgeClass: 'warning',
		    badgeIcon: 'favorite',
		    title: 'Second heading',
		    content: 'More awesome content.'
	  	},
	  	{
		    badgeClass: 'info',
		    badgeIcon: 'question_answer',
		    title: 'First heading',
		    content: 'Some awesome content.'
	  	}, 
	  	{
		    badgeClass: 'warning',
		    badgeIcon: 'favorite',
		    title: 'Second heading',
		    content: 'More awesome content.'
	  	},
	  	{
		    badgeClass: 'info',
		    badgeIcon: 'question_answer',
		    title: 'First heading',
		    content: 'Some awesome content.'
	  	}, 
	  	{
		    badgeClass: 'warning',
		    badgeIcon: 'favorite',
		    title: 'Second heading',
		    content: 'More awesome content.'
	  	},
	  	{
		    badgeClass: 'info',
		    badgeIcon: 'question_answer',
		    title: 'First heading',
		    content: 'Some awesome content.'
	  	}, 
	  	{
		    badgeClass: 'warning',
		    badgeIcon: 'favorite',
		    title: 'Second heading',
		    content: 'More awesome content.'
	  	}
	];     

	self.animateElementIn = function($el) {
	    $el.removeClass('hidden');
	    $el.addClass('animated bounce-in'); // this example leverages animate.css classes
  	};

  	self.animateElementOut = function($el) {
	    $el.addClass('hidden');
	    $el.removeClass('animated bounce-in'); // this example leverages animate.css classes
  	};

  }

})();
