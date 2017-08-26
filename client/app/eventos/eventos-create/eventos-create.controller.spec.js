'use strict';

describe('Component: EventosCreateComponent', function () {

  // load the controller's module
  beforeEach(module('eventosSasApp'));

  var EventosCreateComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    EventosCreateComponent = $componentController('EventosCreateComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
