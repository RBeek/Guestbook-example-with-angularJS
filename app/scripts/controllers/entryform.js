'use strict';

angular.module('nokNokApp')
  .controller('EntryformCtrl', function($scope, $location, $filter, $interval, SeCounters, guestbook) {
    $scope.guestbookcounter = SeCounters.get('guestbook');
    $scope.guestbook = guestbook;

    $scope.$on('$destroy', function() {
      // Make sure that the interval is destroyed too
      $interval.cancel(addtime);
    });

    var addtime = $interval(function() {
      var d = $filter('date')(new Date(), 'MM/dd/yyyy @ HH:mm');
      $scope.guestbook.datetime = d;

    }, 1000);


    var changeSuccess = function() {
      SeCounters.increase('guestbook');
      $scope.guestbookcounter = SeCounters.get('guestbook');
      $interval.cancel(addtime);
      $location.path('/');
    };

    var changeError = function() {
      throw new Error('Sth went wrong...');
    };

    $scope.addToGuestbook = function() {
      $scope.guestbook.$saveOrUpdate(changeSuccess, changeSuccess, changeError, changeError);
    };
  });