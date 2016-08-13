app.controller('MailCtrl', function($scope,$rootScope,emailArraysFactory,provideTime){

	// INITIALIZING EMAIL ARRAYS
	$scope.receivedArr = emailArraysFactory.receivedArr;

	$scope.spamArr = emailArraysFactory.spamArr;

	$scope.removedArr = emailArraysFactory.removedArr;

	$scope.sendedArr = emailArraysFactory.sendedArr;

	$scope.switch = false;


	
	
	$scope.sendMail = function(){
		
	if ($scope.SendAuthor == null){
			alert('please type your address properly');
			return false;
	}
	else if ($scope.SendAuthor.indexOf('@') == -1) {
		alert('please type your address properly');
		return false;
	}
	else if($scope.SendSubject == null || $scope.mailContent == null){
		alert('subject or mail content are to short');
		return false;
	}
	else{
	emailArraysFactory.sendedArr.push({'author': $scope.SendAuthor, 'subject': $scope.SendSubject,'date': provideTime.getCurrentDate(), 'content': $scope.mailContent});
	
	alert('mail sended successfully');

	$scope.SendAuthor = $scope.SendSubject = $scope.mailContent = null;
	}
	

	}


	$scope.readMail = function(author,subject,date,backLink){
		
		$rootScope.author = author;
		$rootScope.subject = subject;
		$rootScope.date = date;
		$rootScope.backLink = backLink;

	}



});
