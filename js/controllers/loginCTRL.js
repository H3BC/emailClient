app.controller('loginCTRL', function($scope,$window){

	
	$scope.signIn = function(){
		if($scope.login == "admin" && $scope.password == "admin"){

			$window.location.assign('/views/mainView');
			
		}	
		else{

			alert('wrong login or password');
			return false;

		}
	}
	


});


