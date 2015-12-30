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