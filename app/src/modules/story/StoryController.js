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

    var lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. " +
		          "Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor." +
		          "Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, " +
		          "ut porta lorem lacinia consectetur. Donec ut libero sed arcu vehicula ultricies a non tortor." +
		          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

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
	  		badgeClass: 'default',
			badgeIcon: 'image',
			title: 'Third heading',
			titleContentHtml: '<img class="img-responsive" src="http://www.freeimages.com/assets/183333/1833326510/wood-weel-1444183-m.jpg">',
			contentHtml: lorem,
			footerContentHtml: '<a href="">Continue Reading</a>'
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
