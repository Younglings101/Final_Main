var app = angular.module('main', ['ngRoute']);
app.config(function ($routeProvider){
    $routeProvider
    .when('/twitter', {
        templateUrl: "socialMedia/twitter.html"
    })
    .when('/facebook', {
        templateUrl: "socialMedia/facebook.html"
    })
    .when('/instagram', {
        templateUrl: "socialMedia/instagram.html"
    })
    .when('/youtube', {
        templateUrl: "socialMedia/youtube.html"
    })
    .when('/linkedin', {
        templateUrl: "socialMedia/linkedin.html"
    })
    .otherwise({
        redirectTo: '/'
    });
});


