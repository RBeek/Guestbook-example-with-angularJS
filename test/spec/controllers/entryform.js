'use strict';

describe('Controller: EntryformCtrl', function () {

  // load the controller's module
  beforeEach(module('nokNokApp'));

  var EntryformCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EntryformCtrl = $controller('EntryformCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
