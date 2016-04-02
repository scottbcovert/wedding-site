(function(){

  angular
       .module('guestbook')
       .controller('GuestbookController', [
          '$firebaseArray',
          '$timeout',
          '$mdToast',
          'InstagramFactory',
          GuestbookController
       ]);

  /**
   * Guestbook Controller
   * @constructor
   */
  function GuestbookController($firebaseArray,$timeout,$mdToast,InstagramFactory) {
    
    // Display toast to user
    var guestbookToast = $mdToast.simple()
    					.capsule(true)
    					.position('bottom right')
    					.textContent('Sign our guestbook or post to Instagram with #TamGoesCovert')
    					.action('Ok')
    					.highlightAction(true)
    					.hideDelay(0);
    $timeout( function(){ $mdToast.show(guestbookToast); }, 500 );

    // Initialize InstagramFactory Settings
  	InstagramFactory.setTag(WEDDING_HASHTAG);
  	InstagramFactory.setClientId(INSTAGRAM_CLIENT_ID);

    // Initialize guestbook post list
    var postRef = new Firebase(FIREBASE_URL+'posts'),

  		postList = $firebaseArray(postRef),

  		COLORS = ['#33ccff','#ffff00','#00ff00','#ff33cc','#ff9933','#ff3300','#9900cc','#6600ff','#009900'],
  		//COLORS = ['blue','yellow','green','pink','orange','red','purple','darkpurple','darkgreen'],

  		randomColor = function() {
			return COLORS[Math.floor(Math.random() * COLORS.length)];
		},

		compare = function(a,b) {
			return b.created_time - a.created_time;
	  	},
	  	
	  	searchInstagram = function(maxTagId, callback) {
	  		// Search Instagram for Posts with Wedding Hashtag
	  		InstagramFactory.getTaggedPosts(maxTagId)
	  			.then(function(response)
	  			{
	  			  if(response.meta.code == '400')
                  {
                    console.log('Error requesting Instagram posts: ' + response.meta.error_message);
                    return false;
                  }
                  instagramData = instagramData.concat(response.data);
	  			  if (typeof response.pagination.next_max_tag_id !== 'undefined')
	  			  {
	  			  	return searchInstagram(response.pagination.next_max_tag_id,callback)
	  			  }
	  			  else
	  			  {
	  			  	callback();
	  			  }	  			  
	  			}, function(error)
	  			{
	  			  console.log(error);
	  			});
	  	},

	  	makeTile = function(title,size)
	  	{
	  		return {
	  			color: randomColor(),
	  			title: title,
	  			colspan: size,
	  			rowspan: size
	  		}
	  	},

	  	setPosts = function() {
	  		self.posts = guestbookPosts.concat(instagramPosts).sort(compare);	  		
	  	},

	  	instagramData = [],
	  	guestbookPosts = [],
	  	instagramPosts = [],
	  	self = this;	  	  	

    	postList.$watch(function() { 	  		
	  		//postList.sort(compare);
	  		var posts=[];
	  		postList.forEach(function(p){
	  			var tile = makeTile(p.title,2);
	  			tile.message = p.message;
	  			tile.created_time = new Date(p.date).getTime();
	  			// Add author
	  			if (p.author){
	  				tile.author = p.author.indexOf('-')===0 ? p.author : '- ' + p.author;
	  			}
	  			// Add photo
	  			if (p.url){
	  				tile.image = p.url;	  				
	  			}
	  			posts.push(tile);
	  		});
	  		guestbookPosts = posts;
	  		setPosts();
	  	});

    	postList.$loaded()
    		.then(function()
    		{
    			searchInstagram(null,
    				function()
		  			{
		  				instagramData.forEach(function(instagramPost){
		  					var tile = makeTile('#TamGoesCovert',2);
		  					tile.message = typeof instagramPost.caption !== 'undefined' ? instagramPost.caption.text : '';
		  					tile.created_time = instagramPost.created_time * 1000;
		  					tile.author = typeof instagramPost.user !== 'undefined' ? '- ' + instagramPost.user.full_name : '';
		  					if (typeof instagramPost.images !== 'undefined')
		  					{
		  						tile.image = instagramPost.images.low_resolution.url;
		  						instagramPosts.push(tile);
		  					}	  					
		  				});
		  				setPosts();		  				
		  			}
		  		);		  			
    		});			  	
  }

})();