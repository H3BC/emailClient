var app = angular.module('emailApp', ['ngRoute'])

app.config(function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl: '/views/received.html',
		controller: 'MailCtrl'
	})
	.when('/recived', {
		templateUrl: '/views/received.html' ,
		controller: 'MailCtrl'
		
		 })
	.when('/sended', {
		templateUrl: '/views/sended.html',
		controller: 'MailCtrl' 
		
		 })
	.when('/spam', {
		templateUrl: '/views/spam.html',
		controller: 'MailCtrl' 
		
		 })
	.when('/removed', {
		templateUrl: '/views/removed.html',
		controller: 'MailCtrl' 
		
		 })
	.when('/message', {
		templateUrl: '/views/FullMessage.html',
		controller: 'MailCtrl' 
		
		 })

	.otherwise({
		redirectTo: '/'
	});

});

