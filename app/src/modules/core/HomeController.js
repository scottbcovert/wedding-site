(function(){

  angular
       .module('home')
       .controller('HomeController', [
          '$firebaseArray',
          HomeController
       ]);

  /**
   * Home Controller
   * @constructor
   */
  function HomeController($firebaseArray) {
    var picsRef = new Firebase(FIREBASE_URL+'gallerypics'),

    	picsList = $firebaseArray(picsRef),

    	self = this;

    	picsList.$loaded()
    		.then(function() {

    			var pics = [{}];
	  			
		  		picsList.forEach(function(p){
		  			var pic = {
		  				imageUrl: p.url
		  			};
		  			pics.push(pic);
		  		});
		  		pics.push({});
		  		self.pics = pics;
		  		console.log(pics);
    		
    		});    	
  }

})();