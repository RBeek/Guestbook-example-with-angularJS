'use strict';

angular.module('nokNokApp')
  .controller('EntryformCtrl', function($scope, $location, $filter, SeCounters, guestbook) {
    $scope.guestbookcounter = SeCounters.get('guestbook');
    $scope.guestbook = guestbook;

    var d = $filter('date')(new Date(), 'MM/dd/yyyy @ HH:mm')
    $scope.guestbook.datetime = d;

    var changeSuccess = function() {
      SeCounters.increase('guestbook');
      $scope.guestbookcounter = SeCounters.get('guestbook');
      $location.path('/');
    };

    var changeError = function() {
      throw new Error('Sth went wrong...');
    };

    $scope.addToGuestbook = function() {
      $scope.guestbook.$saveOrUpdate(changeSuccess, changeSuccess, changeError, changeError);
    };
  });