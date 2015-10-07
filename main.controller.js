angular
  .module('placebo', [ ])
 
  .controller('MainController', function ($scope, $http) {

      $http.get("https://api.spotify.com/v1/artists/0MebO9MFNvedjUBsPGo0YN/albums?market=GB").success(function (response) {$scope.albums = response.items;});
            
  });