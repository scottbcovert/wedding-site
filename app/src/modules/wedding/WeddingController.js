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
    	bh = {
    		imagePath: 'http://inwilmingtonde.com/media/1819/xlarge.jpg',
    		name: 'Bellevue Hall',
    		address: '911 Philadelphia Pike, Wilmington, DE 19809'
    	},
    	weddingTime = 'Saturday, May 7th, 2016 at 4:30pm',
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
    			content: $sce.trustAsHtml('<p>Bellevue Hall (911 Philadelphia Pike, Wilmington, DE 19809) is located just minutes from I-95 (Exit 9, Marsh Road) in northern Delaware.</p><iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d3066.451008864227!2d-75.49603688506492!3d39.77443290237546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x89c6e3119f40d3dd%3A0xa6dcfd39e0517d2e!2sBellevue+Hall%2C+911+Philadelphia+Pike%2C+Wilmington%2C+DE+19809!3m2!1d39.774428799999995!2d-75.4938482!5e0!3m2!1sen!2sus!4v1451368774572" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>')
    		},
    		{
    			label: 'History',
    			content: $sce.trustAsHtml('<p>A former duPont family estate, Bellevue Hall was built in 1855 by Philadelphia businessman Hanson Robinson. Originally designed as a castle bearing Gothic Revival architectural stylings, Robinson first named the mansion Woolton Hall.</p><img class="md-tab-content-image" src="https://www.philadelphiabuildings.org/pab-images/medium-display/pat10056/pwb1856-095.jpg"/><p>In 1883 William duPont, Sr. purchased the estate along with two adjacent properties and added barns, stables and other buildings associated with his equestrian interests. Upon his father\'s death, William duPont, Jr. inherited the estate in 1928 and spent the next several years remodeling the castle’s exterior into a Classical Revival-style estate reminiscent of Montpelier, the home of James and Dolley Madison, and his own boyhood home.</p><p>In 1976, the State of Delaware purchased the property and opened Bellevue State Park to the public the following year.</p>')
    		}
    	],
    	travelIndex = 0,
    	travelTabs = [
    		{
    			label: 'Sightseeing',
    			header: 'Things to Do',
    			imagePath: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSjhqDdbM0um7ruk1nKRYcKsnGnZXgHFyaMdRhNZSeGmDlhkzrJ',
    			content: $sce.trustAsHtml('<p>Plenty of stuff to do in good old Wilmington!</p>')
    		},
    		{
    			label: 'Travel',
    			header: 'PHL Airport',
    			imagePath: 'https://www.airportrevenuenews.com/wp-content/uploads/2013/10/PHL-LOGO.jpg',
    			content: $sce.trustAsHtml('<p>The closest airport is PHL-<a target="_blank" href="https://www.google.com/flights/#search;t=PHL;d=2016-05-06;r=2016-05-08">lookup some flights here</a></p>')
    		},
    		{
    			label: 'Hotel',
    			header: 'Inn at Wilmington',
    			imagePath: 'http://www.innatwilmington.com/photogallery/large/hotel/inn-at-wilmington-exterior.jpg',
    			content: $sce.trustAsHtml('<p>If you lived here, you\'d be home already!</p>')
    		}
    	],
    	wpIndex = 0,
    	wpTabs = [
    		{    		
    			label: 'Maid of Honor',
    			header: 'Merritt Tam',
    			subHeader: 'Sister of the Bride',
    			imagePath: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAMOAAAAJGVlZGQzODQzLTViZTUtNDQzNy1hY2RjLTk3NTcyMThmOGE2YQ.jpg',
    			content: $sce.trustAsHtml('<p>Merritt is Lauren\'s big sis and is secretly evil.</p>')
    		},
    		{    			
    			label: 'Best Man',
    			header: 'Bryan Covert',
    			subHeader: 'Brother of the Groom',
    			imagePath: 'https://media.licdn.com/media/p/4/000/15b/137/118a1aa.jpg',
    			content: $sce.trustAsHtml('<p>Bryan is Scott\'s big bro and is openly evil.</p>')
    		}
    	],
    	self = this;
    	self.eventHeader = eventHeader,
    	self.travelHeader = travelHeader,
    	self.weddingPartyHeader = weddingPartyHeader,
    	self.bh = bh,
    	self.weddingTime = weddingTime,
    	self.bhTabs = bhTabs,
    	self.travelIndex = travelIndex,
    	self.travelTabs = travelTabs,
    	self.wpIndex = wpIndex,
    	self.wpTabs = wpTabs;
  }

})();