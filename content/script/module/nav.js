define(["angular"], function(angular){
	var navApp = angular.module('navApp', []);
	var status = 0;

	navApp.service('navServices', ['$http', '$q', function(http, q){
		var deffered = q.defer();

		http.get('JSON/nav.json').then(function(data){
			deffered.resolve(data);
		});

		this.getMenu = function(){
			return deffered.promise;
		};

	}])
	.controller('MainMenuController', ['$scope', 'navServices', function(scope, navServices){
		var promise = navServices.getMenu();
		promise.then(function(data){
			scope.menus = data.data;
		});
		scope.hideNav = function(){
			console.log('you clicked hideNav');
			scope.status = 0;
		};	
	}])
	.controller('MobileMenuController', ['$scope', function(scope){
		

		scope.navSlider = function(){
			scope.status = !scope.status;			
		};


	}]);
	return navApp;
});
