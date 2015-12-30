(function(){

  angular
       .module('home')
       .controller('HomeController', [
          '$firebaseArray',
          'ngCountdownRibbon',
          HomeController
       ]);

  /**
   * Home Controller
   * @constructor
   */
  function HomeController($firebaseArray, ngCountdownRibbon) {
    
    // Initialize countdown ribbon
    var WEDDING_DAY = '2016-05-07',
        RIBBON_POSITION = 'right',
        RIBBON_YELLOW_THEME = 'yellow',
        RIBBON_YELLOW_CLASS = 'ribbon_yellow',
        RIBBON_HIDDEN_THEME = 'hidden',
        RIBBON_HIDDEN_CLASS = 'ribbon_hidden',
        todaysDate = new Date(),
        weddingDateUTC = new Date(WEDDING_DAY),
        weddingDate = new Date(weddingDateUTC.getTime() + weddingDateUTC.getTimezoneOffset()*60000),
        ribbonTheme;

    ngCountdownRibbon.addTheme(RIBBON_YELLOW_THEME,RIBBON_YELLOW_CLASS);
    ngCountdownRibbon.addTheme(RIBBON_HIDDEN_THEME,RIBBON_HIDDEN_CLASS);
    
    if (weddingDate > todaysDate){
      ribbonTheme = RIBBON_YELLOW_THEME;      
    }
    else {
      ribbonTheme = RIBBON_HIDDEN_THEME; 
    }

    ngCountdownRibbon.set(WEDDING_DAY, '', {position:RIBBON_POSITION,theme:ribbonTheme});
    
    // Initialize image gallery
    var picsRef = new Firebase(FIREBASE_URL+'gallerypics'),

      picsList = $firebaseArray(picsRef),

      self = this;

      picsList.$loaded()
        .then(function() {

          // Initialize pics with buffer
          var pics = [{}];
          
          picsList.forEach(function(p){
            var pic = {
              imageUrl: p.url
            };
            pics.push(pic);
          });

          // Add buffer to end of pics array
          pics.push({});
          
          self.pics = pics;
        
        });     
  }

})();