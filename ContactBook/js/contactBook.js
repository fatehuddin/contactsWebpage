// controllers module, with ngResource module dependency to use $resource
angular.module('ui.bootstrap.demo', ['ui.bootstrap','ngResource']);
angular.module('ui.bootstrap.demo').controller('ContactFormCtrl', ['$scope','$resource', function ($scope,$resource) {
	// initialize REST API access by creating Friend class
	$scope.getContacts = $resource('https://candidate-test.herokuapp.com/contacts');
		
		//all static query() method of Friend class		
  	   $scope.getContacts.query(function(data) {
       $scope.contacts = data;
       console.log('data', $scope.contacts)
      });

  // Do something with myService
}]);

	