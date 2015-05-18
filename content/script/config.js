
requirejs.config({
	baseUrl: 'content/script',
	paths: {
		'angular'			: '../../bower_components/angular/angular.min',
		'angularRoute'		: '../../bower_components/angular-route/angular-route.min',
		'main'				: 'main',
		'route' 			: 'route',
		'nav'				: 'module/nav',
	},

	shim:{
		'angular':{
			exports: 'angular'
		},
		angularRoute: {
			deps: ['angular'],
		},
		main:{
			deps: ['nav', 'route']
		}
	}	

});

require(['main'], function(main){
	angular.bootstrap(document, ['main']);


});