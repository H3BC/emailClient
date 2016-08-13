app.controller('MailCtrl', function($scope,$rootScope,emailArraysFactory){

	// INITIALIZING EMAIL ARRAYS
	$scope.receivedArr = emailArraysFactory.receivedArr;

	$scope.spamArr = emailArraysFactory.spamArr;

	$scope.removedArr = emailArraysFactory.removedArr;

	$scope.sendedArr = emailArraysFactory.sendedArr;

	$scope.switch = false;

	
	



	$scope.readMail = function(author,subject,date,backLink){
		
		$rootScope.author = author;
		$rootScope.subject = subject;
		$rootScope.date = date;
		$rootScope.backLink = backLink;

	}



});
