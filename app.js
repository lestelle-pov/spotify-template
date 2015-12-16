// search for song, place the first one in array, 

// 


var data;
var baseUrl = 'https://api.spotify.com/v1/search?type=track&query='
var myApp = angular.module('myApp', [])

var myCtrl = myApp.controller('myCtrl', function($scope, $http) {
  
  $scope.audioObject = {}
  
  $scope.getSong1 = function() {
    $http.get(baseUrl + $scope.track1).success(function(response){
      //console.log($scope.track)
      data = $scope.tracks1 = response.tracks.items
      //console.log(data)
      
    })
  }

  $scope.getSong2 = function() {
    $http.get(baseUrl + $scope.track2).success(function(response){
      //console.log($scope.track)
      data = $scope.tracks2 = response.tracks.items
      //console.log(data)
      
    })
  }

  $scope.getSong3 = function() {
    $http.get(baseUrl + $scope.track3).success(function(response){
      //console.log($scope.track)
      data = $scope.tracks3 = response.tracks.items
      //console.log(data)
      
    })
  }

  $scope.getSong4 = function() {
    $http.get(baseUrl + $scope.track4).success(function(response){
      //console.log($scope.track)
      data = $scope.tracks4 = response.tracks.items
      //console.log(data)
      
    })
  }

  $scope.getSong5 = function() {
    $http.get(baseUrl + $scope.track5).success(function(response){
      //console.log($scope.track)
      data = $scope.tracks5 = response.tracks.items
      //console.log(data)
      
    })
  }

  $scope.getSong6 = function() {
    $http.get(baseUrl + $scope.track6).success(function(response){
      //console.log($scope.track)
      data = $scope.tracks6 = response.tracks.items
      //console.log(data)
      
    })
  }

  $scope.getSong7 = function() {
    $http.get(baseUrl + $scope.track7).success(function(response){
      //console.log($scope.track)
      data = $scope.tracks7 = response.tracks.items
      //console.log(data)
      
    })
  }

  $scope.getSong8 = function() {
    $http.get(baseUrl + $scope.track8).success(function(response){
      //console.log($scope.track)
      data = $scope.tracks8 = response.tracks.items
      //console.log(data)
      
    })
  }

  $scope.getSong9 = function() {
    $http.get(baseUrl + $scope.track9).success(function(response){
      //console.log($scope.track)
      data = $scope.tracks9 = response.tracks.items
      //console.log(data)
      
    })
  }

  $scope.play = function(song) {
    if($scope.currentSong == song) {
      $scope.audioObject.pause()
      $scope.currentSong = false
      return
    }
    else {
      if($scope.audioObject.pause != undefined) $scope.audioObject.pause()
      $scope.audioObject = new Audio(song);
      $scope.audioObject.play()  
      $scope.currentSong = song
    }
  }
})

// Add tool tips to anything with a title property
$('body').tooltip({
    selector: '[title]'
});

// $(".word1 button").click(function(){
//         $("#sentence1").show();
//     });


