(function(){

  angular
       .module('story')
       .controller('NewEventController', [
          '$mdDialog', 
          '$firebaseArray',
          NewEventController
       ]);

  /**
   * New Event Controller
   * @constructor
   */
  function NewEventController($mdDialog,$firebaseArray) {
  	var eventRef = new Firebase(FIREBASE_URL+'events'),

  		eventList = $firebaseArray(eventRef),
  	
  		errorAlert = function(errorMessage) {
	        return $mdDialog.alert()
	          .title('Oops!')
	          .content(errorMessage)
	          .clickOutsideToClose(true)
	          .ok('Close');
	    },

	    newEventDialog = function($event) {      
		    $mdDialog.show({
		      controller: DialogController,
		      controllerAs: 'dc',
		      templateUrl: './src/modules/story/views/newEventForm.html',
		      targetEvent: $event,
		      clickOutsideToClose: true
		    });		    
	    },

	    /**
	     * Dialog Controller
	     */
	    DialogController = function($mdDialog) {
	      
	      var newEvent = {},

	      	  cancel = function() {	      	  	
		        $mdDialog.cancel();		        
		      },

		      save = function() {
		      	eventList.$add({
		        	name: newEvent.name ? newEvent.name : null,
		        	description: newEvent.description ? newEvent.description : null,
		        	date: newEvent.date ? newEvent.date.toString() : null,
		        	url: newEvent.url ? newEvent.url : null
		        });
		        $mdDialog.cancel();
		      },

		      setUrl = function(fileUrl) {
		      	newEvent.url = fileUrl;
		      },

		      self = this;
		      self.newEvent = newEvent;
		      self.cancel = cancel;
		      self.save = save;
		      self.setUrl = setUrl;
	    },
    
    	self = this;
    	self.newEventDialog = newEventDialog;
  }  

})();