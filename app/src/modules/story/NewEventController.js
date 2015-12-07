(function(){

  angular
       .module('story')
       .controller('NewEventController', [
          '$mdDialog', 
          NewEventController
       ]);

  /**
   * New Event Controller
   * @constructor
   */
  function NewEventController($mdDialog) {
  	
  	var errorAlert = function(errorMessage) {
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
		        console.log(newEvent);
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