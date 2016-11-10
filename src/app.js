var app = angular.module('myApp', ['ngRoute']);

app.config(function ($routeProvider) {
	$routeProvider
		.when('/info', {
			templateUrl: './info.html',
			controller: 'infoController'
		})
})

app.controller('mainController', function ($scope) {
	


	$scope.name = 'Lol';
	$scope.data = '';

	$scope.handleClick = function() {
		$scope.name = $scope.data;
	}
});


app.controller('infoController', function($scope) {

	$scope.info = 'sectet';

});