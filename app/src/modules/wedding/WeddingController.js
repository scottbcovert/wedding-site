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
    		imagePath: './assets/images/details/Bellevue_Hall.jpg',
    		name: 'Bellevue Hall on ' + weddingTime,
    		address: '911 Philadelphia Pike, Wilmington, DE 19809'
    	},
    	bhTabs = [
    		{
    			label: 'Ceremony',
    			content: $sce.trustAsHtml('<p>Our wedding ceremony will take place outside Bellevue Hall mansion on ' + weddingTime + ' on the front lawn by the gazebo. On-site parking will be available behind the home.</p><img class="md-tab-content-image" src="./assets/images/details/Gazebo.jpg"/>')
    		},
    		{
    			label: 'Reception',
    			content: $sce.trustAsHtml('<p>Immediately after the ceremony we invite you to join us for a cocktail hour inside Bellevue Hall followed by dinner on the patio and dancing inside the mansion.</p> <div class="layout-row layout-margin layout-align-center-start"> <img class="flex-50 md-tab-details-image md-tab-content-image" src="./assets/images/details/Portico.jpg"/> <img class="flex-50 md-tab-details-image md-tab-content-image" src="./assets/images/details/TrophyRoom.jpeg"/> </div>')
    		},
    		{
    			label: 'Directions',
    			content: $sce.trustAsHtml('<p>Bellevue Hall (911 Philadelphia Pike, Wilmington, DE 19809) is located just minutes from I-95 (Exit 9, Marsh Road) in northern Delaware.</p><iframe src="https://www.google.com/maps/embed/v1/place?key=' + GOOGLE_MAPS_API_KEY + '&q=Bellevue+Hall%2C+911+Philadelphia+Pike%2C+Wilmington%2C+DE+19809" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>')
    		},
    		{
    			label: 'History',
    			content: $sce.trustAsHtml('<p>A former duPont family estate, Bellevue Hall was built in 1855 by Philadelphia businessman Hanson Robinson. Originally designed as a castle bearing Gothic Revival architectural stylings, Robinson first named the mansion Woolton Hall.</p><img class="md-tab-content-image" src="./assets/images/details/WooltonHall.jpg"/><p>In 1883 William duPont, Sr. purchased the estate along with two adjacent properties and added barns, stables and other buildings associated with his equestrian interests. Upon his father\'s death, William duPont, Jr. inherited the estate in 1928 and spent the next several years remodeling the castle’s exterior into a Classical Revival-style estate reminiscent of Montpelier, the home of James and Dolley Madison, and his own boyhood home.</p><p>In 1976, the State of Delaware purchased the property and opened Bellevue State Park to the public the following year.</p>')
    		}
    	],
    	travelTabs = [
    		{
    			label: 'Travel',
    			header: 'PHL Airport & WIL Amtrak Station',
    			imagePath: './assets/images/travel/travel.jpg',
    			content: $sce.trustAsHtml('<p>For guests joining us from out of town (thank you!), <a target="_blank" href="https://www.google.com/flights/#search;t=PHL;d=2016-05-06;r=2016-05-08">PHL is the closest airport</a> at only 20 miles from downtown Wilmington.</p><p>For those coming by train, there is a <a target="_blank" href="https://www.amtrak.com/servlet/ContentServer?pagename=am/am2Station/Station_Page&code=WIL">Wilmington Amtrak station</a> on the Northeast Regional and Acela Express routes.</p>')
    		},
    		{
    			label: 'Lodging',
    			header: 'Inn at Wilmington & DoubleTree Hotel',
    			imagePath: './assets/images/travel/hotel.jpg',
    			content: $sce.trustAsHtml('<p>For your convenience we have reserved room blocks under the name <b>Covert-Tam Wedding</b> at the following hotels; please make your travel plans by <b>April 1st</b> for a discounted rate.</p><div class="fill-across layout-row layout-padding layout-align-end-start"><div class="flex-50"><b><u>Inn at Wilmington (Marriott)</u></b><p>Rate: $109/night<br/>Phone: 302.479.7900<br/>Address: 300 Rocky Run Pkwy<br/>Wilmington, DE 19803<br/><i>Complimentary Hot Breakfast Buffet</i></p></div><div class="flex-50"><b><u>DoubleTree (Hilton)</u></b><p>Rate: $117/night<br/>Phone: 302.478.6000<br/>Address: 4727 Concord Pike<br/>Wilmington, DE 19810</p></div></div>')
    		},
        {
          label: 'Sightseeing',
          header: 'Things to Do',
          imagePath: './assets/images/travel/Wilmington.jpg',
          content: $sce.trustAsHtml('<p>By coming to our wedding you will already be visiting Bellevue State Park so you\'re off to a great start, but there are plenty of other sites to see during the weekend. We\'d recommend a trip to:<div class="md-padding"><a target="_blank" href="http://www.winterthur.org/">Winterthur</a><br/><a target="_blank" href="http://www.hagley.org/">Hagley</a><br/><a target="_blank" href="http://www.delart.org/">Delaware Art Museum</a><br/><a target="_blank" href="http://longwoodgardens.org/">Longwood Gardens</a><br/><a target="_blank" href="http://www.winterthur.org/?p=1055">Point-to-Point</a><br/><a target="_blank" href="http://wilmingtonflowermarket.org/">Flower Market</a></div></p>')
        }
    	],
    	wpTabs = [
    		{    		
    			label: 'Maid of Honor',
    			header: 'Merritt Tam',
    			subHeader: 'Sister of the Bride',
    			imagePath: './assets/images/weddingparty/Merritt.jpg',
    			content: $sce.trustAsHtml('<p>Merritt has been showing Lauren the ropes since she was knee-high to a grasshopper. An MIT grad, Merritt currently lives in NYC where she is managing director of workplace strategy & design for Teach For America.</p><p>In her spare time Merritt enjoys long walks, making funny voices, and free samples from Costco.</p>')
    		},
    		{    			
    			label: 'Best Man',
    			header: 'Bryan Covert',
    			subHeader: 'Brother of the Groom',
    			imagePath: './assets/images/weddingparty/Bryan.jpg',
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