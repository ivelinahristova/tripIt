'use strict';

/**
 * @ngdoc function
 * @name tripItApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the tripItApp
 */
angular.module('tripItApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
