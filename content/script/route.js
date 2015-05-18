define(["angular", "angularRoute"], function(angular, angularRoute){
	var routeApp = angular.module('routeApp', ['ngRoute']);

	routeApp.controller('RouteController', ['$scope', '$routeParams', function(scope, routeParams){
		scope.routeParams = routeParams;

	}]).
	controller('HomeController', ['$scope', '$routeParams', function(scope, routeParams){
		scope.name = "HomeController";
		scope.params = routeParams;
	}])
	.controller('WorkController', ['$scope', '$routeParams', function(scope, routeParams){
		scope.name = "WorkController";
		scope.params = routeParams;
	}])
	.controller('ProfessionController', ['$scope', '$routeParams', function(scope, routeParams){
		scope.name = "ProfessionController";
		scope.params = routeParams;
	}])
	.controller('AboutController', ['$scope', '$routeParams', function(scope, routeParams){
		scope.name = "AboutController";
		scope.params = routeParams;
	}])
	.controller('ContactController', ['$scope', '$routeParams', function(scope, routeParams){
		scope.name = "ContactController";
		scope.params = routeParams;
	}]);

	routeApp.config(['$routeProvider', '$locationProvider', function(routeProvider, locationProvider){
		routeProvider 
			.when('/', {
				templateUrl : 'partials/home.html',
				controller: 'HomeController'
			})
			.when('/home', {
				templateUrl : 'partials/home.html',
				controller: 'HomeController'
			})
			.when('/work', {
				templateUrl : 'partials/work.html',
				controller : 'WorkController'
			})
			.when('/profession', {
				templateUrl : 'partials/profession.html',
				controller : 'ProfessionController'
			})
			.when('/about', {
				templateUrl : 'partials/about.html',
				controller : 'AboutController'
			})
			.when('/contact', {
				templateUrl : 'partials/contact.html',
				controller : 'ContactController'
			});

			 if(window.history && window.history.pushState){
			    locationProvider.html5Mode(true);
			  }
	}]);


	return routeApp;


});