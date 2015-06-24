'use strict';

/**
 * @ngdoc function
 * @name tripItApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tripItApp
 */
angular.module('tripItApp')
    .controller('TripCtrl', function ($scope, localStorageService, $routeParams) {
        $scope.storageType = localStorageService.getStorageType();

        $scope.clearAll = function() {
            localStorageService.clearAll();
        };

        $scope.trip = localStorageService.get($routeParams.param1);

        $scope.map = {
            center: {
                latitude: $scope.trip.startPointLat,
                longitude: $scope.trip.startPointLng
            },
            markers: [{
                latitude: $scope.trip.startPointLat,
                longitude: $scope.trip.startPointLng
            }],
            zoom: 8
        }


    });
