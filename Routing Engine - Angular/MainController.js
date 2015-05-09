// Code goes here

(function() {
  var app = angular.module("MyViewer");

  var MainController = function($scope, $interval, $location) {
    var decrementCountDown = function() {
      $scope.countDown -= 1;
      if ($scope.countDown < 1) {
        $scope.search($scope.userName);
      }
    };
    
    var startCountDown = function() {
      $interval(decrementCountDown, 1000, $scope.countDown);
    };
    
    $scope.search = function(userName) {
      console.log("Search called - " + userName);
      $location.path("/user/"+userName);
    };
    
    $scope.countDown = 5;
    $scope.userName = "angular";
    
    // Start Count Down will call func that will call decrement function at every 1 secs until it reaches 5
    startCountDown();

  };
  //Binding Module with the Controller.
  app.controller("MainController", MainController);

}());