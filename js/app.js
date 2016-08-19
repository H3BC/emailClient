var app = angular.module('emailApp', ['ui.router'])

app.config(function($stateProvider, $urlRouterProvider) {

	$stateProvider
		.state('home', {
			url: '/',
			views: {
				'@': {
					templateUrl: '/views/login.html',
					controller: 'loginCTRL'
				}
			}
		})
		.state('received', {
			url: '/received',
			views: {
				'@': {
					templateUrl: '/views/received.html',
					controller: 'receivedCTRL'
				}
			}
		})
		.state('sended', {
			url: '/sended',
			views: {
				'@': {
					templateUrl: '/views/sended.html',
					controller: 'sendedCTRL'
				}
			}
		})
		.state('removed', {
			url: '/removed',
			views: {
				'@': {
					templateUrl: '/views/removed.html',
					controller: 'removedCTRL'
				}
			}
		})
		.state('spam', {
			url: '/spam',
			views: {
				'@': {
					templateUrl: '/views/spam.html',
					controller: 'spamCTRL'
				}
			}
		})
		.state('message', {
			url: '/message',
			views: {
				'@': {
					templateUrl: '/views/FullMessage.html',
					controller: 'MailCtrl'
				}
			}
		});

	$urlRouterProvider.otherwise('/');
});