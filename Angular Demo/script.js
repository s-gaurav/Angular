// Code goes here

var MainController = function($scope, $http){
  var onUserComplete = function(response){
    $scope.person=response.data;
  };
  
  var onError = function(response){
    $scope.error="User Service is Down, please contact administrator";
  };
  
  $http.get("https://api.github.com/users/s-gaurav").then(onUserComplete, onError);
  /*var person ={
    firstName : "Gaurav",
    lastName : "Saxena",
    imgSrc : "https://scontent.xx.fbcdn.net/hphotos-xpt1/v/t1.0-9/11142434_10206401716823330_7446300947966985587_n.jpg?oh=46a614d920ad2f4c09f3238b983a6c93&oe=55D5F563"
  };*/
  
  $scope.message="Hello, ";
  //$scope.person=person;
}