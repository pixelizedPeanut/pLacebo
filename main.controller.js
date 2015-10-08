angular
  .module('placebo', [ ])
  .config(function($locationProvider) { $locationProvider.html5Mode(true); })
  .controller('MainController', function ($scope, $http) {

      $http.get("https://api.spotify.com/v1/artists/6RZUqkomCmb8zCRqc9eznB/albums?market=GB&album_type=album").success(function (response) {$scope.albums = response.items;});
    
    //if id in url
        var url = window.location.search;
        if(url) var id = url.match(/(\?||&)id=(\w+)&?/)[2];
        //get id from url
        if(id) $http.get("https://api.spotify.com/v1/albums/"+id).success(function (response) {$scope.album = response;});
       
            
  });