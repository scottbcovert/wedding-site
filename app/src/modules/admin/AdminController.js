(function(){

  angular
       .module('admin')
       .filter('AttendingFilter', [
       	  AttendingFilter
       ])
       .controller('AdminController', [
          'AuthFactory',
          'currentAuth',
          '$firebaseArray',          
          'SweetAlert',
          AdminController
       ]);

  /**
   * Attending filter
   * @constructor
   */
  function AttendingFilter() {
  	return function(response) {
  		if (response)
  			return 'Yes';
  		return 'No';
  	}
  }

  /**
   * Admin Controller
   * @constructor
   */
  function AdminController(AuthFactory,currentAuth,$firebaseArray,SweetAlert) {    

  	AuthFactory.$onAuth(function(authData) {
  		currentAuth = authData;
  		if (currentAuth)
		{
			rsvpRef = new Firebase(FIREBASE_URL + 'rsvps'),  		
	  		rsvpList = $firebaseArray(rsvpRef);	  			  	
		}		
  	});		  	

	var ref = new Firebase(FIREBASE_URL),
	loginData = {
		username: '',
		password: ''
	},
	rsvpRef,
	rsvpList = [],
	adminHeader = function()
	{
		return currentAuth ? 'Admin Dashboard' : 'Admin Login';
	},
	cardAlignment = function()
	{
		return currentAuth ? 'stretch center' : 'center center';
	},
	sortOrder = "['Last Name']",
	signin = function()
	{
		AuthFactory.$authWithPassword({
			email	: loginData.username,
			password: loginData.password
		}).then(function(authData) {		  
			// Successful login; clear form
			loginData.username = '';
			loginData.password = '';			
		}).catch(function(error) {
		  SweetAlert.swal('Oops!',error.message, 'error'); // Show error to user		  
		});		

	},
	isAuthenticated = function()
	{
		return currentAuth ? true : false;
	},
	totalRsvps = function() {
		return rsvpList.length;
	},
	totalConfirmations = function() {
		var confirmations = 0;
		rsvpList.forEach(function(rsvp){
			if (rsvp.Response)
				confirmations++;
		});
		return confirmations;
	},
	totalRegrets = function() {
		var regrets = 0;
		rsvpList.forEach(function(rsvp){
			if (!rsvp.Response)
				regrets++;
		});
		return regrets;
	},
	getRsvpList = function() {
		return rsvpList;
	},
    self = this;
    self.adminHeader = adminHeader,
    self.cardAlignment = cardAlignment,
    self.sortOrder = sortOrder,
    self.signin = signin,	
	self.isAuthenticated = isAuthenticated;
	self.rsvpList = getRsvpList,
	self.totalRsvps = totalRsvps,
	self.totalConfirmations = totalConfirmations,
	self.totalRegrets = totalRegrets,
	self.loginData = loginData;	
  }

})();