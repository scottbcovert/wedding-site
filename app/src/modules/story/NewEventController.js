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
		      template: '<md-dialog aria-label="Form" class="md-inline-form"> <md-content class="md-padding" layout-padding> <form name="eventForm"> <div layout layout-sm="column"> <md-input-container flex> <label>Event Name</label> <input ng-model="dc.event.name"> </md-input-container> <md-datepicker ng-model="dc.event.date" md-placeholder="Event Date"></md-datepicker> </div> <div layout="row" layout-sm="column" class="layout-sm-column layout-row"> <md-input-container flex> <label>Description</label> <textarea ng-model="dc.event.description" columns="1" md-maxlength="150"></textarea> </md-input-container> </div> </form> </md-content> <md-dialog-actions layout="row"> <span flex></span> <md-button ng-click="dc.cancel()"> Cancel </md-button> <md-button ng-click="dc.save()" class="md-primary"> Save </md-button> </md-dialog-actions></md-dialog>',
		      targetEvent: $event,
		      clickOutsideToClose: true
		    });		    
	    },

	    /**
	     * Dialog Controller
	     */
	    DialogController = function($mdDialog) {
	      
	      var cancel = function() {
		        $mdDialog.cancel();
		        console.log('Canceled!');
		      },

		      save = function() {
		        // Save
		        $mdDialog.cancel();
		        console.log('Saved!');
		      },

		      self = this;
		      self.cancel = cancel;
		      self.save = save;
	    },
    
    	self = this;
    	self.newEventDialog = newEventDialog;
  }  

})();