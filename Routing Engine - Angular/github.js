(function(){
  var github = function($http){
    var getUser = function(userName){
      return $http.get("https://api.github.com/users/" + userName)
                  .then(function(response){
                    return response.data;
                  });
    };
    
    var getRepos = function(person){
      console.log("I am in getRepos" + person.name + person.repos_url);
      return $http.get(person.repos_url)
                  .then(function(response){
                    return response.data;
                  });
    };
    
    return {
      getUser:getUser,
      getRepos:getRepos
    }
  };
  var module = angular.module("MyViewer");
  module.factory("github",github);
  
}());