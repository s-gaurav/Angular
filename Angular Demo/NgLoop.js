// Code goes here

(function() {
  // Creating Module by the name of MyViewer and passing blank array since it is not dependednt
  // on anyother module. Blank array signifies it is referring base Module called Angular
  var app = angular.module("MyViewer", []);

  var MainController = function($scope, $http, $interval) {
    var onUserComplete = function(response) {
      $scope.person = response.data;
      //After getting user detail, get its repository details and on success store it in repos
      $http.get($scope.person.repos_url).then(onRepos,onError)
    };
    
    var onRepos = function(response){
      $scope.repos = response.data;
    };
    
    var onError = function(response) {
      $scope.error = "User Service is Down, please contact administrator";
    };
    
    var decrementCountDown = function()
    {
      $scope.countDown -= 1;
      if($scope.countDown < 1)
      {
        $scope.search($scope.userName);
      }
    };
    
    $scope.search = function(userName) {
      console.log("I am in" + userName);
      $http.get("https://api.github.com/users/" + $scope.userName).then(onUserComplete, onError);
    };
    
    var startCountDown = function(){
      // This is Angular Service that will trigger at specific interval.
      // In below case it will call decerementCountDown func when it reaches at $scopeCountDown
      // It will tick after every 1 secs
      $interval(decrementCountDown,1000,$scope.countDown);
    };
    $scope.countDown = 5;
    
    $scope.reposSortOrder="-stargazers_count";
    $scope.userName = "angular";
    $scope.message = "Hello, ";
    
    // Start Count Down will call func that will call decrement function at every 1 secs until it reaches 5
    startCountDown();
    
  };
  //Binding Module with the Controller.
  app.controller("MainController", ["$scope", "$http","$interval", MainController]);

}());