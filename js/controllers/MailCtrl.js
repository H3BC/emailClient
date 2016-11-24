app.controller('MailCtrl', function($scope, $rootScope, emailArraysFactory, provideTime, emailOperations) {

	// INITIALIZING EMAIL ARRAYS
	$scope.receivedArr = emailArraysFactory.receivedArr;

	$scope.spamArr = emailArraysFactory.spamArr;

	$scope.removedArr = emailArraysFactory.removedArr;

	$scope.sendedArr = emailArraysFactory.sendedArr;

	$scope.switch = false;

	$scope.spam = function(index, array) {
		var ask = confirm('are you sure?');
		if (ask === true) {

			emailOperations.sendToSpam(index, array);
		} else {
			return false;
		}

	}

	$scope.delete = function(index, array) {
		var ask = confirm('are you sure?');
		if (ask === true) {

			emailOperations.remove(index, array);
		} else {
			return false;
		}

	}

	$scope.sendMail = function() {

		if ($scope.SendAuthor == null) {
			alert('please type your address properly');
			return false;
		} else if ($scope.SendAuthor.indexOf('@') == -1) {
			alert('please type your address properly');
			return false;
		} else if ($scope.SendSubject == null || $scope.mailContent == null) {
			alert('subject or mail content are to short');
			return false;
		} else {

			emailOperations.sendMail($scope.SendAuthor, $scope.SendAuthor, $scope.mailContent);

			$scope.SendAuthor = $scope.SendSubject = $scope.mailContent = null;
		}


	}

	$scope.readMail = function(author, subject, date, backLink) {

		$rootScope.messageDetails = {
			author: author,
			subject: subject,
			date: date,
			content: content,
			backLink: backLink,
		}

	}



});