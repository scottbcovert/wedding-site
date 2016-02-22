(function(){

  angular
       .module('rsvp')
       .controller('RsvpController', [
          '$firebaseArray',
          '$timeout',
          '$mdToast',
          'SweetAlert',
          RsvpController
       ]);

  /**
   * Rsvp Controller
   * @constructor
   */
  function RsvpController($firebaseArray,$timeout,$mdToast,SweetAlert) {
    // Display toast to user
    var rsvpToast = $mdToast.simple()
              .capsule(true)
              .parent(angular.element(document.querySelector('#toastBounds')))
              .position('top left')
              .textContent('Add RSVPs for others in your party ==>')
              .hideDelay(3000);
    $timeout( function(){ $mdToast.show(rsvpToast); }, 500 );

    var rsvpRef = new Firebase(FIREBASE_URL+'rsvps'),
    	rsvpList = $firebaseArray(rsvpRef),
    	rsvpHeader = 'RSVP',
    	rsvpImage = {
    		imagePath: './assets/images/rsvp/default.png',
	    	imageName: 'RSVP',
	    	imageClass: 'auto-max-300'
    	},
    	rsvpResponse = {
    		accepts: 'Accepts with Pleasure',
    		declines: 'Declines with Regret'
    	},
    	rsvps = [{response: true}],
    	addNewRsvp = function() {
		    var newItemNo = rsvps.length+1;
		    rsvps.push({response:true});
		  },
  		removeRsvp = function(index) {    
    		rsvps.splice(index,1);
  		}
  		totalRsvps = function() {
  			return rsvps.length;
  		},
  		totalConfirmations = function() {
  			var confirmations = 0;
  			rsvps.forEach(function(rsvp){
  				if (rsvp.response){
  					confirmations++;
  				}
  			});
  			return confirmations;
  		},
  		cancel = function() {
  			rsvps.splice(0,rsvps.length);
  			rsvps.push({response:true});
  		},
  		submit = function() {
		    var noErrors = true;
		    rsvps.forEach(function(rsvp){
		    	if (typeof rsvp.firstName === 'undefined' || typeof rsvp.lastName === 'undefined')
		    	{
		    		noErrors = false;
		    	}
		    })
		    if (noErrors)
		    {
		    	var counter = 0;
		    	rsvps.forEach(function(rsvp){
		    		rsvpList.$add({
		    			"First Name": rsvp.firstName,
		    			"Last Name": rsvp.lastName,
		    			"Full Name": rsvp.firstName + ' ' + rsvp.lastName,
		    			"Response": rsvp.response,
		    			"Submitted By": rsvps[0].firstName + ' ' + rsvps[0].lastName,
		    			"Date": (new Date()).toString()
		    		}).then(function(){
		    			counter++;
		    			if (counter === rsvps.length)
		    			{
		    				cancel();
			    			SweetAlert.swal('Success!', 'Your response was submitted, thank you!', 'success');                
		    			}
		    		})
		    	});
		    }
		    else
		    {
		    	// Show error to user
		    	SweetAlert.swal('Oops!','Please make sure you\'ve entered all guests\' information', 'error');
		    }
  		},
    	self = this;
    	self.rsvpHeader = rsvpHeader,
    	self.rsvpImage = rsvpImage,
    	self.rsvpResponse = rsvpResponse,
    	self.rsvps = rsvps,
    	self.addNewRsvp = addNewRsvp,
    	self.removeRsvp = removeRsvp,
    	self.totalRsvps = totalRsvps,
    	self.totalConfirmations = totalConfirmations,
    	self.cancel = cancel,
    	self.submit = submit;
  }

})();