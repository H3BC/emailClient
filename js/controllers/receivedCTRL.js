app.controller('receivedCTRL', function($scope,$rootScope,emailArraysFactory, emailOperations){

	// INITIALIZING EMAIL ARRAYS
	$scope.receivedArr = emailArraysFactory.receivedArr;

	

	$scope.delete = function(index,array){
		var ask = confirm('are you sure?');
		if (ask === true){

		emailOperations.remove(index,array);
		}
		
		else{
			return false;
		}
		
	}
	
	
	$scope.readMail = function(author,subject,date,content,backLink,index,arrayName){
		
		$rootScope.author = author;
		$rootScope.subject = subject;
		$rootScope.date = date;
		$rootScope.content = content;
		$rootScope.backLink = backLink;
		$rootScope.index = index;
		$rootScope.array = arrayName;

	}



});
