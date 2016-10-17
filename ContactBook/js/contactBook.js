// controllers module, with ngResource module dependency to use $resource
angular.module('myApp', ['myApp', 'ngResource']);
angular.module('myApp').controller('ContactFormCtrl', ['$scope', '$resource', function($scope, $resource) {
    // initialize REST API access by creating getContacts class
    $scope.getContacts = $resource('https://candidate-test.herokuapp.com/contacts');

    // static query() method of getContacts class		
    $scope.getContacts.query(function(data) {
        $scope.contacts = data;
       
    });

}]);