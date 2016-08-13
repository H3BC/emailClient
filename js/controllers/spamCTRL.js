app.controller('spamCTRL', function($scope,$rootScope,emailArraysFactory){

	// INITIALIZING EMAIL ARRAYS
	

	$scope.spamArr = emailArraysFactory.spamArr;

	

	$scope.switch = false;

	
	



	$scope.readMail = function(author,subject,date,backLink){
		
		$rootScope.author = author;
		$rootScope.subject = subject;
		$rootScope.date = date;
		$rootScope.backLink = backLink;

	}



});
