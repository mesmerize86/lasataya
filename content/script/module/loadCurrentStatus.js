define(['angular'], function(angular){

	var loadCurrentStatus = angular.module('loadCurrentStatus', [])

	.service('loadService', ['$q', function(q){
		var deffered = q.defer();

		this.setTime = function(){
			//setTimeout(function(){
				//alert('Hi I came in the middle of page to show you my progress');
				return deffered.promise;
			//}, 5000);
		};
	}])
	.controller('LoadStatusController', ['$scope', 'loadService', function(scope, loadService){
		var promise = loadService.setTime;
		promise.then(function(){
			setTimeout(function(){
				alert('Hi I load after 5 seconds. I came in the middle of page to show you my progress');
			}, 5000);
		});
	}]);


	return loadCurrentStatus;
});