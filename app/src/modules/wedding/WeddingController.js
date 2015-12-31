(function(){

  angular
       .module('wedding')
       .controller('WeddingController', [
          '$sce',
          WeddingController
       ]);

  /**
   * Wedding Controller
   * @constructor
   */
  function WeddingController($sce) {
    
    var eventHeader = 'Event Details',
    	travelHeader = 'Travel & Accommodations',
    	weddingPartyHeader = 'Wedding Party',
    	weddingTime = 'Saturday, May 7th, 2016 at 4:30pm',
      bh = {
    		imagePath: 'http://inwilmingtonde.com/media/1819/xlarge.jpg',
    		name: 'Bellevue Hall on ' + weddingTime,
    		address: '911 Philadelphia Pike, Wilmington, DE 19809'
    	},
    	bhTabs = [
    		{
    			label: 'Ceremony',
    			content: $sce.trustAsHtml('<p>Our wedding ceremony will take place outside Bellevue Hall mansion on ' + weddingTime + ' on the front lawn by the gazebo. On-site parking will be available behind the home.</p><img class="md-tab-content-image" src="http://cdn2-b.examiner.com/sites/default/files/styles/image_content_width/hash/e5/0d/e50d69112b9f2d685e1e78654863bc27.jpg?itok=hRm-BVaO"/>')
    		},
    		{
    			label: 'Reception',
    			content: $sce.trustAsHtml('<p>Immediately after the ceremony we invite you to join us for a cocktail hour inside Bellevue Hall followed by dinner on the patio and dancing inside the mansion.</p><img class="md-tab-content-image" src="http://static1.squarespace.com/static/52603b9de4b068f7ae4862b5/52842156e4b02b5684e7b9c0/52842172e4b0070d8ce3408c/1384391042626/Bellevue+Hall.jpg"/>')
    		},
    		{
    			label: 'Directions',
    			content: $sce.trustAsHtml('<p>Bellevue Hall (911 Philadelphia Pike, Wilmington, DE 19809) is located just minutes from I-95 (Exit 9, Marsh Road) in northern Delaware.</p><iframe src="https://www.google.com/maps/embed/v1/place?key=' + GOOGLE_MAPS_API_KEY + '&q=Bellevue+Hall%2C+911+Philadelphia+Pike%2C+Wilmington%2C+DE+19809" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>')
    		},
    		{
    			label: 'History',
    			content: $sce.trustAsHtml('<p>A former duPont family estate, Bellevue Hall was built in 1855 by Philadelphia businessman Hanson Robinson. Originally designed as a castle bearing Gothic Revival architectural stylings, Robinson first named the mansion Woolton Hall.</p><img class="md-tab-content-image" src="https://www.philadelphiabuildings.org/pab-images/medium-display/pat10056/pwb1856-095.jpg"/><p>In 1883 William duPont, Sr. purchased the estate along with two adjacent properties and added barns, stables and other buildings associated with his equestrian interests. Upon his father\'s death, William duPont, Jr. inherited the estate in 1928 and spent the next several years remodeling the castle’s exterior into a Classical Revival-style estate reminiscent of Montpelier, the home of James and Dolley Madison, and his own boyhood home.</p><p>In 1976, the State of Delaware purchased the property and opened Bellevue State Park to the public the following year.</p>')
    		}
    	],
    	travelTabs = [
    		{
    			label: 'Travel',
    			header: 'PHL Airport / WIL Amtrak Station',
    			imagePath: 'data:image/jpeg;base64,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',
    			content: $sce.trustAsHtml('<p>For guests joining us from out of town (thank you!), <a target="_blank" href="https://www.google.com/flights/#search;t=PHL;d=2016-05-06;r=2016-05-08">PHL is the closest airport</a> at only 20 miles from downtown Wilmington.</p><p>For those coming by train, there is a <a target="_blank" href="https://www.amtrak.com/servlet/ContentServer?pagename=am/am2Station/Station_Page&code=WIL">Wilmington Amtrak station</a> on the Northeast Regional and Acela Express routes.</p>')
    		},
    		{
    			label: 'Lodging',
    			header: 'Coming Soon!',
    			imagePath: './assets/images/hotel.jpg',
    			imageClass: 'md-card-image-shrink',
    			content: $sce.trustAsHtml('<p>We will be reserving a room block at a nearby hotel, please check back soon for further details.</p>')
    		},
        {
          label: 'Sightseeing',
          header: 'Things to Do',
          imagePath: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSjhqDdbM0um7ruk1nKRYcKsnGnZXgHFyaMdRhNZSeGmDlhkzrJ',
          content: $sce.trustAsHtml('<p>By coming to our wedding you will already be visiting Bellevue State Park so you\'re off to a great start, but there are plenty of other sites to see during the weekend. We\'d recommend a trip to:<br/><br/><a target="_blank" href="http://www.winterthur.org/">Winterthur</a><br/><a target="_blank" href="http://www.nemoursmansion.org/">Nemours Mansion</a><br/><a target="_blank" href="http://www.delart.org/">Delaware Art Museum</a><br/><a target="_blank" href="http://longwoodgardens.org/">Longwood Gardens</a></p><p>Also while you\'re here don\'t forget to stop at <a target="_blank" href="http://www.woodsidefarmcreamery.com/">Woodside Farm Creamery</a> for some of that famous Delaware ice cream!</p>')
        }
    	],
    	wpTabs = [
    		{    		
    			label: 'Maid of Honor',
    			header: 'Merritt Tam',
    			subHeader: 'Sister of the Bride',
    			imagePath: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAMOAAAAJGVlZGQzODQzLTViZTUtNDQzNy1hY2RjLTk3NTcyMThmOGE2YQ.jpg',
    			content: $sce.trustAsHtml('<p>Merritt has been showing Lauren the ropes since she was knee-high to a grasshopper. An MIT grad, Merritt currently lives in NYC where she is managing director of workplace strategy & design for Teach For America.</p><p>In her spare time Merritt enjoys long walks, making funny voices, and free samples from Costco.</p>')
    		},
    		{    			
    			label: 'Best Man',
    			header: 'Bryan Covert',
    			subHeader: 'Brother of the Groom',
    			imagePath: 'https://scontent-atl3-1.cdninstagram.com/hphotos-xfa1/t51.2885-15/e15/11245669_1575943969324060_938643558_n.jpg',
    			content: $sce.trustAsHtml('<p>Bryan has been Scott\'s big brother for as long as he can remember. He is currently completing an anesthesiology fellowship in pain medicine at Vanderbilt and is a very generous reviewer of Uber drivers, often giving 5 stars.</p><p>Bryan, his wife Meredith, their son Hunter, and the three family dogs live in Nashville but will soon be moving to Macon; so basically their lives aren\'t hectic at all.</p>')
    		}
    	],
    	self = this;
    	self.eventHeader = eventHeader,
    	self.travelHeader = travelHeader,
    	self.weddingPartyHeader = weddingPartyHeader,
    	self.bh = bh,
    	self.weddingTime = weddingTime,
    	self.bhTabs = bhTabs,
    	self.travelTabs = travelTabs,
    	self.wpTabs = wpTabs;
  }

})();