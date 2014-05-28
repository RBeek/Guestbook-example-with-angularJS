'use strict';

angular.module('nokNokApp')
    .controller('MainCtrl', function($scope, $location, $anchorScroll, guestbook, MessageBus) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.guestbook = guestbook;

        MessageBus.broadcast("guestbook", guestbook);

        $scope.scrollTo = function(id) {
            var old = $location.hash();
            $location.hash(id);
            $anchorScroll();
            $location.hash(old);
        };
    });