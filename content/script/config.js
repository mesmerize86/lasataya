
requirejs.config({
	baseUrl: 'content/script',
	paths: {
		'angular'			: '../../bower_components/angular/angular.min',
		'angularRoute'		: '../../bower_components/angular-route/angular-route.min',
		'angularAnimate' 	: '../../bower_components/angular-aniamte/angular-animate.min',
		'main'				: 'main',
		'route' 			: 'route',
		'nav'				: 'module/nav',
		'loadCurrentStatus'	: 'module/loadCurrentStatus',
		'slider'			: 'module/slider'
	},

	shim:{
		'angular':{
			exports: 'angular'
		},
		angularRoute: {
			deps: ['angular'],
		},
		angularAnimate: {
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