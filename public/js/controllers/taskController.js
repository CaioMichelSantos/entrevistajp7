app.controller('TaskController', function ($scope, $http) {
	$scope.tasks = [];
	$scope.newTask = {};
	$scope.error = false;

	$http({
		method: 'GET',
		url: '/v1/tasks'
	}).then(function (success) {
		$scope.tasks = success.data
		$scope.error = false;

	}, function (error) {
		$scope.error = "Erro durante requisição GET TASK";
	});


	$scope.registerTask = function () {
		$http({
			method: 'POST',
			url: '/v1/tasks',
			data: { 'newTask' : $scope.newTask.taskDescription }
		}).then(function (success) {
			$scope.tasks = success.data
			$scope.newTask.taskDescription = '';
			$scope.error = false;

		}, function (error) {
			$scope.error = "Erro durante requisição POST TASK";
		});
	};

	$scope.removeTask = function (id) {

		$http({
			method: 'DELETE',
			url: '/v1/tasks/' + id,
		}).then(function (success) {
			$scope.tasks = success.data
			$scope.error = false;

		}, function (error) {
			$scope.error = "Erro durante requisição DELETE TASK";
		});

	};


});