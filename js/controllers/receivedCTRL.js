app.controller('receivedCTRL', function($scope,$rootScope,emailArraysFactory){

	// INITIALIZING EMAIL ARRAYS
	$scope.receivedArr = emailArraysFactory.receivedArr;

	$scope.switch = false;

	
	
	$scope.readMail = function(author,subject,date,content,backLink){
		
		$rootScope.author = author;
		$rootScope.subject = subject;
		$rootScope.date = date;
		$rootScope.content = content;
		$rootScope.backLink = backLink;
		

	}



});
