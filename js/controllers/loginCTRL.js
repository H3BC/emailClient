app.controller('loginCTRL', function($rootScope, $scope, $state) {

	$scope.signIn = function() {
		if ($scope.login == "admin" && $scope.password == "admin") {

			// $window.location.assign('/views/mainView');

			$rootScope.isLoggedIn = true;
			$state.go('received')

		} else {

			alert('wrong login or password');
			return false;

		}
	}
});