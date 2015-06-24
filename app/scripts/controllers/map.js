'use strict';

/**
 * @ngdoc function
 * @name tripItApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tripItApp
 */
angular.module('tripItApp')
    .controller('MapCtrl', function ($scope, localStorageService, $routeParams) {
        $scope.storageType = localStorageService.getStorageType();

        $scope.clearAll = function() {
            localStorageService.clearAll();
        };

        $scope.trip = localStorageService.get($routeParams.param1);
    });
