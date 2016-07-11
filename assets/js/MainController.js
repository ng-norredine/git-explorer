(function(module) {

  var MainController = function($scope, $location, $log) {
 
    $scope.search = function(username) {
      //Recherche
      $log.log("Recherche en cours...");
      $location.path("/user/" + username);
    };
    //Placeholder
    $scope.username = "ng-norredine";
  }; 
  
  module.controller("MainController", MainController);
  
}(angular.module("git-explorer")));