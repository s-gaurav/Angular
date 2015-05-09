// Code goes here

(function() {
  // Creating Module by the name of MyViewer and passing blank array since it is not dependednt
  // on anyother module. Blank array signifies it is referring base Module called Angular
  var app = angular.module("MyViewer", []);

  var MainController = function($scope, $http) {
    var onUserComplete = function(response) {
      $scope.person = response.data;
    };

    var onError = function(response) {
      $scope.error = "User Service is Down, please contact administrator";
    };
    $scope.search = function(userName) {
      console.log("I am in" + userName);
      $http.get("https://api.github.com/users/" + $scope.userName).then(onUserComplete, onError);
    };


    $scope.userName = "angular";
    $scope.message = "Hello, ";

  };
  //Binding Module with the Controller.
  app.controller("MainController", ["$scope", "$http", MainController]);

}());