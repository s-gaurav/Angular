// Code goes here

(function() {
  var app = angular.module("MyViewer", ["ngRoute"]);
  app.config(function($routeProvider){
    $routeProvider
      .when("/main",{
        templateUrl : "main.html",
        controller: "MainController"
      })
      .when("/user/:userName",{
        templateUrl : "user.html",
        controller: "UserController"
      })
      .otherwise({redirectTo:"/main"});
  });
}());