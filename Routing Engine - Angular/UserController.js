// Code goes here

(function() {
  var app = angular.module("MyViewer");

  var UserController = function($scope, github, $routeParams) {
    var onUserComplete = function(data) {
      
      $scope.person = data;
      github.getRepos($scope.person).then(onRepos,onError);
    };
    
    var onRepos = function(data){
      $scope.repos = data;
    };
    
    var onError = function(response) {
      $scope.error = "User Service is Down, please contact administrator";
    };
    console.log("User Controller called - " + $routeParams.userName);
    $scope.reposSortOrder="-stargazers_count";
    $scope.userName = $routeParams.userName;
    github.getUser($scope.userName).then(onUserComplete,onError);
  };
  //Binding Module with the Controller.
  app.controller("UserController", UserController);

}());