define(["angular"], function(angular){
	var navApp = angular.module('navApp', []);

	navApp.service('navServices', ['$http', '$q', function(http, q){
		var deferObject = q.defer(),
		myMethods = {
			getNavPromise : function(){
				var promise = http.get('JSON/nav.json');
				
				promise.then(
					function(success){
						deferObject.resolve(success);
					},
					function(error){
						deferObject.resolve(error);
					});
				return deferObject.promise;
			}
		};
		return myMethods;

	}])
	.controller('MainMenuController', ['$scope', 'navServices', function(scope, navServices){

		var promise = navServices.getNavPromise();
		promise.then(function(data){
			scope.menus = data.data;
			scope.success = true;
		});
	}])
	.controller('MobileMenuController', ['$scope', function(scope){	
		scope.navSlider = function(){
			var status = 0;
			scope.status = !scope.status;
		};
	}])
	.directive('slidemenu', function(){
		return {
			controller : function ($scope){
				
				$scope.slideMenu = function(element){
					if(!element.hasClass('slideMenu')) {
						element.addClass('slideMenu');
					}
				};
			},
			link : function(scope, element) {
				setTimeout(function(){
					scope.slideMenu(element);
				}, 500);
			}
		};
	})
	.directive('slidecontent', function(){
		return {
			controller: function($scope){

				$scope.slideContent = function(element) {
					if(!element.hasClass('slideContent')) {
						element.addClass('slideContent');
					}
				};
			},
			link : function(scope, element) {
				setTimeout(function(){
					scope.slideContent(element);
				}, 800);
			}
		};
	});
	return navApp;
});
