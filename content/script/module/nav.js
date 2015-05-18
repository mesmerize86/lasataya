define(["angular"], function(angular){
	var navApp = angular.module('navApp', []);
	var status = 0;

	navApp.service('navServices', ['$http', '$q', function(http, q){
		var deferObject,
		myMethods = {
			getNavPromise: function(){
				var  promise = http.get('JSON/nav.json'),
					deferObject = deferObject || q.defer();

					promise.then(
						function(success){
							deferObject.resolve(success);
						},
						function(error){
							deferObject.resolve(error);
						});
				return deferObject.promise;
			},
			getNotificationPromise: function(){
				var promise = http.get('partials/notifaction.html'),
					deferObject = deferObject || q.defer();

					promise.then(
						function(success){
							deferObject.resolve(success);
						},
						function(error){
							deferObject.resolve(error);
						});
				return deferObject.promise;
			};
		};

		/*http.get('JSON/nav.json').then(function(data){
			deffered.resolve(data);
		});

		this.getMenu = function(){
			deferObject = deferObject || q.defer(); //we can use one variable "deffered" instead of instantiating multipe $q.defer() objects
			return deffered.promise;
		};

		this.setTime = function(){
				deferObject = deferObject|| q.defer();
				return deffered.promise;
		};*/

	}])
	.controller('MainMenuController', ['$scope', 'navServices', function(scope, navServices){
		
		var scope.success = false,
			scope.error = false;

		var promise = navServices.getNavPromise();
		promise.then(function(data){
			
			scope.menus = data.data;

			setTimeout(function(){
				alert('Hi I load after 5 seconds. I came in the middle of page to show you my progress');
			}, 2000);
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
