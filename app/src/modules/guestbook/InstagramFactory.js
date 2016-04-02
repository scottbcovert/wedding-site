(function(){

  angular
       .module('guestbook')
       .factory('InstagramFactory', [
          '$http',
          '$q',
          InstagramFactory
       ]);

  /**
   * Instagram Factory
   * @constructor
   */
  function InstagramFactory($http,$q) {
    
    var service = {},
      baseUrl = 'https://api.instagram.com/v1/'
      _clientId = ''
      _tag = '',
      _finalUrl = '';

    var makeTagUrl = function(maxTagId)
    {
      var endpointUrl = baseUrl + 'tags/' + _tag + '/media/recent?client_id=' + _clientId + '&callback=JSON_CALLBACK';
      return (maxTagId!==null && typeof maxTagId!=='undefined') ? endpointUrl + '&max_tag_id=' + maxTagId : endpointUrl;
    }

    service.setTag = function(tag)
    {
      _tag = tag;
    }

    service.setClientId = function(clientId)
    {
      _clientId = clientId;
    }

    service.getTaggedPosts = function(maxTagId)
    {
      _finalUrl = makeTagUrl(maxTagId);
      var deferred = $q.defer();
      $http({
      	method: 'JSONP',
      	url: _finalUrl
      })
      .success(function(data)
	    {
	      deferred.resolve(data);
	    })
      .error(function()
      	{
          deferred.reject('Error resolving tagged posts');
      	})
      return deferred.promise;
    }

    return service;
            	
  }

})();