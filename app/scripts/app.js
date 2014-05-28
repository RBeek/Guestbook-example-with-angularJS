'use strict';

var app = angular
  .module('nokNokApp', [
    'ngSanitize',
    'ngRoute',
    'mongolabResourceHttp',
    'ngResource',
    'app.arGuestbook',
    'app.seCounters'
  ])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        resolve: {
          guestbook: function(Guestbook) {
            return Guestbook.all();
          }
        }
      })
      .when('/new', {
        templateUrl: 'views/entryform.html',
        controller: 'EntryformCtrl',
        resolve: {
          guestbook: function(Guestbook) {
            return new Guestbook();
          }
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  });


// connection to mongolab resource
app.factory('Guestbook', function($mongolabResourceHttp) {
  return $mongolabResourceHttp('guestbook');
});

app.factory("MessageBus", function($rootScope) {
  return {
    broadcast: function(event, data) {
      $rootScope.$broadcast(event, data);
    }
  };
});

// connection to local mysql resource
angular.module('app.arGuestbook', ['ngResource'])
  .factory('ArGuestbook', ['$resource',
    function($resource) {

      return $resource('/api/guestbook');
    }
  ]);


// set counters from anywhere
angular.module('app.seCounters', [])
  .service('SeCounters', function() {
    var x = {},
      def = '+1';
    return {
      increase: function(name) {
        x.name = x.name === undefined ? def : x.name.indexOf(def) === 0 ? def : x.name++;
      },
      get: function(name) {
        return x.name;
      },
      set: function(name, val) {
        x.name = val;
      }
    };
  });