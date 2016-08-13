app.controller('sendedCTRL', function($scope,$rootScope,emailArraysFactory){

	// INITIALIZING EMAIL ARRAYS
	
	$scope.sendedArr = emailArraysFactory.sendedArr;

	$scope.switch = false;

	
	



	$scope.readMail = function(author,subject,date,content,backLink){
		
		$rootScope.author = author;
		$rootScope.subject = subject;
		$rootScope.date = date;
		$rootScope.content = content;
		$rootScope.backLink = backLink;

	}



});
