app.controller('removedCTRL', function($scope, $rootScope, emailArraysFactory) {

	// INITIALIZING EMAIL ARRAYS

	$scope.removedArr = emailArraysFactory.removedArr;

	$scope.readMail = function(author, subject, date, content, backLink) {

		$rootScope.messageDetails = {
			author: author,
			subject: subject,
			date: date,
			content: content,
			backLink: backLink,
		}
	}
});