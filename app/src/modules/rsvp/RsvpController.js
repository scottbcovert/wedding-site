(function(){

  angular
       .module('rsvp')
       .controller('RsvpController', [
          '$firebaseArray',
          '$mdDialog',
          RsvpController
       ]);

  /**
   * Rsvp Controller
   * @constructor
   */
  function RsvpController($firebaseArray,$mdDialog) {
    
    var rsvpRef = new Firebase(FIREBASE_URL+'rsvps'),
    	rsvpList = $firebaseArray(rsvpRef),
    	rsvpHeader = 'RSVP',
    	rsvpImage = {
    		imagePath: './assets/images/rsvp/newlyweds.jpg',
	    	imageName: 'Newlyweds',
	    	imageClass: 'auto-max-300'
    	},
    	rsvpResponse = {
    		accepts: 'Accepts with Pleasure',
    		declines: 'Declines with Regret'
    	},
    	rsvps = [{response: true}],
    	makeAlert = function(title,message) {
	        return $mdDialog.alert()
	          .title(title)
	          .content(message)
	          .clickOutsideToClose(true)
	          .ok('Close');
	    },
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
			    			$mdDialog.show(makeAlert('Success!','Your response was submitted, thank you!'));
		    			}
		    		})
		    	});
		    }
		    else
		    {
		    	// Show error to user
		    	$mdDialog.show(makeAlert('Oops!','Please make sure you\'ve entered all guests\' information'));
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