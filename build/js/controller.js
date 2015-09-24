app.controller('addItemCtrl', ['$scope', function($scope){

	$scope.items = [];

	$scope.addItem = function(){
		
		$scope.items.push($scope.newItem);

		$scope.newItem = '';

	};
}]);