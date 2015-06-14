'use strict';

/**
 * @ngdoc function
 * @name tripItApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tripItApp
 */
angular.module('tripItApp')
  .controller('MainCtrl', function ($scope) {
    $scope.trips = [
        {
            id: 1,
            startDate: 1,
            endDate: 2,
            locations: [
                {
                    name: 'Varna',
                    date: 1,
                    lat: 1,
                    long: 2
                }
            ],
            name: 'Trip To Varna'
        },
        {
            id: 2,
            name: 'Trip To Krushuna'
        },
        {
            id: 3,
            name: 'Trip To Kulata'
        }
    ];
  });
