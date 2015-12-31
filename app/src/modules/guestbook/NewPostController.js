(function(){

  angular
       .module('guestbook')
       .controller('NewPostController', [
          '$mdDialog', 
          '$firebaseArray',
          NewPostController
       ]);

  /**
   * New Post Controller
   * @constructor
   */
  function NewPostController($mdDialog,$firebaseArray) {
  	var postRef = new Firebase(FIREBASE_URL+'posts'),

  		postList = $firebaseArray(postRef),
  	
  		errorAlert = function(errorMessage) {
	        return $mdDialog.alert()
	          .title('Oops!')
	          .content(errorMessage)
	          .clickOutsideToClose(true)
	          .ok('Close');
	    },

	    newPostDialog = function($event) {      
		    $mdDialog.show({
		      controller: DialogController,
		      controllerAs: 'dc',
		      templateUrl: './src/modules/guestbook/views/newPostForm.html',
		      targetEvent: $event,
		      clickOutsideToClose: true
		    });		    
	    },

	    /**
	     * Dialog Controller
	     */
	    DialogController = function($mdDialog) {
	      
	      var newPost = {},

	      	  cancel = function() {	      	  	
		        $mdDialog.cancel();		        
		      },

		      save = function() {
		      	postList.$add({
		        	title: newPost.title ? newPost.title : null,
		        	message: newPost.message ? newPost.message : null,
		        	author: newPost.author ? newPost.author : null,
		        	url: newPost.url ? newPost.url : null,
		        	date: (new Date()).toString()
		        });
		        $mdDialog.cancel();
		      },

		      setUrl = function(fileUrl) {
		      	newPost.url = fileUrl;
		      },

		      self = this;
		      self.newPost = newPost;
		      self.cancel = cancel;
		      self.setUrl = setUrl;
		      self.save = save;
	    },
    
    	self = this;
    	self.newPostDialog = newPostDialog;
  }  

})();