/* Enregistrements des controlleurs en fonction du routing */

(function(module) {
  module.config(function($routeProvider) {
    $routeProvider
      .when("/main", {
        templateUrl: "views/main.html",
        controller: "MainController"
      })
      .when("/user/:username", {
        templateUrl: "views/user.html",
        controller: "UserController"
      })
      .otherwise({redirectTo: "/main"})
  }); 
 
}(angular.module("git-explorer", ["ngRoute"])));