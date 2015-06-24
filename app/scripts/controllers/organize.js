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
            var tripId = 'trip' + localStorageService.length();
            var trip = {
                name: $scope.tripName,
                dateStart: $scope.tripDateStart,
                dateEnd: $scope.tripDateEnd,
                description: $scope.tripDescription,
                area: $scope.tripArea,
                startPoint: $scope.tripStartPoint,
                startPointLat: $scope.tripStartPointLat,
                startPointLng: $scope.tripStartPointLong,
                link: '#/trip/' +  tripId
            };

            localStorageService.set(tripId, trip);

            console.log(localStorageService.keys());
        };

        if (localStorageService.isSupported) {

        }
    });
