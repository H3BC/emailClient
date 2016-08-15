app.controller('loginCTRL', function($scope,$cookies,$window){

	
	$scope.signIn = function(){
		if($scope.login == "admin" && $scope.password == "admin"){

			$window.location.assign('/views/mainView');
			console.log($cookies.getAll());
			
		}	
		else{

			alert('wrong login or password');
			return false;

		}
	}
	


});


