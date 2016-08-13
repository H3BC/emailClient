app.controller('DashboardCtrl', function($scope,emailArraysFactory){
	
	$scope.received = emailArraysFactory.receivedArr;
	$scope.sended = emailArraysFactory.sendedArr;
	$scope.spam = emailArraysFactory.spamArr;
	$scope.removed = emailArraysFactory.removedArr;

	$scope.info = function(){
		alert('available soon');
	}


});