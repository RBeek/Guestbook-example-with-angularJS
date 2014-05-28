'use strict';

angular.module('nokNokApp').controller('GuestbookCtrl', function($scope, SeCounters) {

  SeCounters.set('guestbook', $scope.guestbook.length);



  /*===================================================
  =            this is a nested controller            =
  ===================================================*/


  /* example using  ngResource to connect to mysql backend*/

  // ArGuestbook.query().$promise.then(function(guestbook) {
  //   $scope.guestbook = guestbook;
  //   SeCounters.set('guestbook', guestbook.length);
  //   // console.log('result', guestbook.length);
  // }, function(err) {
  //   if (err) {};
  // });


  $scope.dosomething = function() {
    console.log('do something in GuestbookCtrl');

  };
});