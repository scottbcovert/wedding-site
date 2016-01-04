(function(){

  angular
       .module('guestbook')
       .controller('GuestbookController', [
          '$firebaseArray',
          '$timeout',
          '$mdToast',
          GuestbookController
       ]);

  /**
   * Guestbook Controller
   * @constructor
   */
  function GuestbookController($firebaseArray,$timeout,$mdToast) {
    
    // Display toast to user
    var guestbookToast = $mdToast.simple()
    					.capsule(true)
    					.position('bottom right')
    					.textContent('Don\'t forget to sign our guestbook!')
    					.action('Ok')
    					.highlightAction(true)
    					.hideDelay(0);
    $timeout( function(){ $mdToast.show(guestbookToast); }, 500 );

    // Initialize guestbook post list
    var postRef = new Firebase(FIREBASE_URL+'posts'),

  		postList = $firebaseArray(postRef),

  		COLORS = ['#33ccff','#ffff00','#00ff00','#ff33cc','#ff9933','#ffffff','#ff3300','#9900cc','#6600ff','#009900'],
  		//COLORS = ['blue','yellow','green','pink','orange','white','red','purple','darkpurple','darkgreen'],

  		randomColor = function() {
			return COLORS[Math.floor(Math.random() * COLORS.length)];
		},

		randomSpan = function() {
		    var r = Math.random();
		    if (r < 0.8) {
		      return 1;
		    } else if (r < 1) {
		      return 2;
		    } else {
		      return 3;
		    }
		},

		compare = function(a,b) {
			return new Date(b.date).getTime() - new Date(a.date).getTime();
	  	},

	  	self = this;

    	postList.$watch(function() { 	  		
	  		postList.sort(compare);
	  		
	  		var posts = [];
	  		
	  		postList.forEach(function(p){
	  			var tile = {
	  				color: randomColor(),
	  				title: p.title,
	  				message: p.message
	  			},
	  			size = randomSpan();
	  			tile.colspan = tile.rowspan = size;
	  			// Add photo
	  			if (p.url){
	  				tile.image = '<img class="md-card-guestbook-image" src="' + p.url + '"/>';
	  			}
	  			// Add author
	  			if (p.author){
	  				tile.author = p.author.indexOf('-')===0 ? p.author : '- ' + p.author;
	  			}
	  			posts.push(tile);
	  		});

	  		self.posts = posts;
	  	});
  }

})();