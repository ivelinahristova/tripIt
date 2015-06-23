'use strict';

/**
 * @ngdoc function
 * @name tripItApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tripItApp
 */
angular.module('tripItApp')
    .controller('OrganizeCtrl', function ($scope, localStorageService) {
        $scope.storageType = localStorageService.getStorageType();

        $scope.clearAll = function() {
            localStorageService.clearAll();
        };

        $scope.addTrip = function () {

            var length = localStorageService.get('trips') ? localStorageService.get('trips').length : 0;

            var trip = {
                name: $scope.trip,
                link: '/trip/' +  length
            };

            var tripId = 'trip' + localStorageService.length();
            localStorageService.set(tripId, trip);

            console.log(localStorageService.keys());
        };

        if (localStorageService.isSupported) {

        }
    });
