(function(){
  'use strict';

  // Prepare the 'story' module for subsequent registration of controllers and delegates
  angular.module('story', [ 'ngSanitize', 'ngMaterial', 'angular-timeline', 'angular-scroll-animate', 'ng-mfb', 'angular-filepicker' ])
  	.config(function (filepickerProvider) {
	    filepickerProvider.setKey(FILEPICKER_API_KEY);
	});


})();