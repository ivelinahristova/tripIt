'use strict';

/**
 * @ngdoc overview
 * @name tripItApp
 * @description
 * # tripItApp
 *
 * Main module of the application.
 */
angular
    .module('tripItApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'LocalStorageModule',
        'uiGmapgoogle-maps'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .when('/map', {
                templateUrl: 'views/map.html',
                controller: 'MapCtrl'
            })
            .when('/organize', {
                templateUrl: 'views/organize.html',
                controller: 'OrganizeCtrl'
            })
            .when('/trip/:param1', {
                templateUrl: 'views/trip.html',
                controller: 'TripCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    },function (localStorageServiceProvider) {
        localStorageServiceProvider
            .setStorageType('sessionStorage');
    },

    ['uiGmapGoogleMapApiProvider', function(GoogleMapApiProviders) {
        GoogleMapApiProvider.configure({
            china: true
        });
    }]

);
