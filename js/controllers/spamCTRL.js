app.controller('spamCTRL', function($scope,$rootScope,emailArraysFactory,emailOperations){

	// INITIALIZING EMAIL ARRAYS
	

	$scope.spamArr = emailArraysFactory.spamArr;

	$scope.delete = function(index,array){
		var ask = confirm('are you sure?');
		if (ask === true){

		emailOperations.remove(index,array);
		}
		
		else{
			return false;
		}
		
	}

$scope.readMail = function(author,subject,date,content,backLink){
		
		$rootScope.author = author;
		$rootScope.subject = date ;
		$rootScope.date = subject;
		$rootScope.content = content;
		$rootScope.backLink = backLink;
		}



});
