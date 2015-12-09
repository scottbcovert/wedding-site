(function(){

  angular
       .module('guestbook')
       .controller('GuestbookController', [
          '$firebaseArray',
          GuestbookController
       ]);

  /**
   * Guestbook Controller
   * @constructor
   */
  function GuestbookController($firebaseArray) {
    var postRef = new Firebase(FIREBASE_URL+'posts'),

  		postList = $firebaseArray(postRef),

  		COLORS = ['pink','darkBlue','purple','teal','grey','gold','blue','green','red','orange'],

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
	  				message: p.message,
	  				author: p.author
	  			},
	  			size = randomSpan();
	  			tile.colspan = tile.rowspan = size;
	  			// Add photo
	  			if (p.url){
	  				tile.image = '<img class="img-response" src="' + p.url + '"/>';
	  			}
	  			posts.push(tile);
	  		});

	  		self.posts = posts;
	  	});
  }

})();