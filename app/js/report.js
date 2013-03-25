function ReportCtrl($scope) {
	
	$scope.connections = [];

	$scope.gateway = null;

	$scope.onReport = function(report) {
		$scope.$apply(function () {
			if (report.error){
				alert("Error on getting report:" + report.error);
				return;
			}
			var c, cs = report.connections;
			$scope.connections = [];

			angular.forEach(cs, function(c) {
				$scope.connections.push(c);
			});

			$scope.gateway.close();
		});
	};

	$scope.getReport = function() {
		$scope.gateway = new Gateway('gw');
		$scope.gateway.login('pw');
		$scope.gateway.report($scope.onReport);
		

	};

	$scope.getReport();
}