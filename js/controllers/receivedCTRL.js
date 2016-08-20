app.controller('receivedCTRL', function($scope, $rootScope, emailArraysFactory, emailOperations) {

	// INITIALIZING EMAIL ARRAYS
	$scope.receivedArr = emailArraysFactory.receivedArr;

	$scope.delete = function(index, array) {
		var ask = confirm('are you sure?');
		if (ask === true) {

			emailOperations.remove(index, array);
		} else {
			return false;
		}

	}

	$scope.readMail = function(author, subject, date, content, backLink, index, arrayName) {


		$rootScope.messageDetails = {
			author: author,
			subject: subject,
			date: date,
			content: content,
			backLink: backLink,
			index: index,
			arrayName: arrayName,
		};



	}



});