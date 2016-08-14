app.controller('sendedCTRL', function($scope,$rootScope,emailArraysFactory,deleteEmail){

	// INITIALIZING EMAIL ARRAYS
	
	$scope.sendedArr = emailArraysFactory.sendedArr;

	$scope.switch = false;

	$scope.delete = function(index,array){
		var ask = confirm('are you sure?');
		if (ask === true){

		deleteEmail.remove(index,array);
		}
		
		else{
			return false;
		}
		
	}
	



	$scope.readMail = function(author,subject,date,content,backLink){
		
		$rootScope.author = author;
		$rootScope.subject = subject;
		$rootScope.date = date;
		$rootScope.content = content;
		$rootScope.backLink = backLink;

	}



});
