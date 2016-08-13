app.controller('removedCTRL', function($scope,$rootScope,emailArraysFactory){

	// INITIALIZING EMAIL ARRAYS

	$scope.removedArr = emailArraysFactory.removedArr;

	

	$scope.switch = false;

	
	



	$scope.readMail = function(author,subject,date,backLink){
		
		$rootScope.author = author;
		$rootScope.subject = subject;
		$rootScope.date = date;
		$rootScope.backLink = backLink;

	}



});