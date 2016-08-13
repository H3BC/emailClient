var app = angular.module('emailApp', ['ngRoute'])

app.config(function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl: '/views/received.html',
		controller: 'receivedCTRL'
	})
	.when('/recived', {
		templateUrl: '/views/received.html' ,
		controller: 'receivedCTRL'
		
		 })
	.when('/sended', {
		templateUrl: '/views/sended.html',
		controller: 'sendedCTRL' 
		
		 })
	.when('/spam', {
		templateUrl: '/views/spam.html',
		controller: 'spamCTRL' 
		
		 })
	.when('/removed', {
		templateUrl: '/views/removed.html',
		controller: 'removedCTRL' 
		
		 })
	.when('/message', {
		templateUrl: '/views/FullMessage.html',
		controller: 'MailCtrl' 
		
		 })

	.otherwise({
		redirectTo: '/'
	});

});

