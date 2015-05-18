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

			/*getNotification : function(){
				var promise = http.get('partials/notification.html');

				promise.then(
					function(success){
						deferObject.resolve(success);
					},
					function(error){
						deferObject.resolve(error);
					});
				return deferObject.promise;
			}*/
		};
		return myMethods;

	}])
	/*.directive('slideContent', function(){
		return{
			transclude: "true",
			controller: function($scope, $compile){
				//$scope.words = [];
				
				$scope.addClass = function(className){
					if(!elem.hasClass(element, className)){
							elem.addClass(className);
						}
						else {
							elem.removeClass(className);
						}
				};
			},
			link : function(scope, element){
				
				scope.addClass(element, className);		
		}
	};
	})
	.directive('slideButton', function(){
		return{
			require: "slideContent",
			link: function(scope, element, attrs, slideContentCtrl){
				var className = 'slidecontent';
				element.on('click', function(){
					slideContentCtrl.addClass(element, className);

					console.log(element);
				});
			}
		};
	})*/
	.controller('MainMenuController', ['$scope', 'navServices', function(scope, navServices){

		var promise = navServices.getNavPromise();
		promise.then(function(data){
			scope.menus = data.data;
			scope.success = true;
		});

		/*setTimeout(function(){
			var notificationPromise = navServices.getNotification();
			promise.then(function(){
				//console.log("success");
				scope.success = true;
			});
		},2000);*/
	}])
	.controller('MobileMenuController', ['$scope', function(scope){	
		scope.navSlider = function(){
			var status = 0;

			scope.status = !scope.status;
			//console.log(slideContent.addClass());			
		};
	}]);
	return navApp;
});
