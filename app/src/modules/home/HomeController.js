(function(){

  angular
       .module('home')
       .controller('HomeController', [
          HomeController
       ]);

  /**
   * Home Controller
   * @constructor
   */
  function HomeController() {
    
    // Initialize image gallery
    var pics = [{}],
        imageList = ['Engagement_Dinner.png',
          'Engagement_Morning.png',
          'Chicago.png',
          'MP.png',
          'NYE_PC.png',
          'Peru_IceCream.png',
          'Magnolias.png',
          'Peru.png',
          'VDay_Baltimore.png',
          'NYE_TopGolf.jpg',
          'Washington_Monument.png',
          'Deep_Creek_Lake.png',
          'Fletcher_Wedding.jpg',
          'Halloween.png',
          'Capalleja_Wedding.png'
        ];

    imageList.forEach(function(image) {
      pics.push({
        imageUrl : './assets/images/home/' + image
      });
    });

    // Add buffer to end of pics array
    pics.push({});

    var self = this;
    self.pics = pics;
                
  }

})();