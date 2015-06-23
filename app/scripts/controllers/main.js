'use strict';

/**
 * @ngdoc function
 * @name tripItApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tripItApp
 */
angular.module('tripItApp')
  .controller('MainCtrl', function ($scope, localStorageService) {
        $scope.storageType = localStorageService.getStorageType();
        var getTrips = function() {
            var trips = [];
            $.each(localStorageService.keys(), function(index, value){
                trips.push(localStorageService.get(value));
            });

            return trips;
        };
        $scope.trips = getTrips();

    if(localStorageService.isSupported) {

    }
  });
