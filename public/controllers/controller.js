var myApp = angular.module("myApp", []);

myApp.controller("AppCtrl", ['$scope', '$http', function($scope, $http) {
	console.log("Hello Worle from controller");
	var refresh = function(){
		$http.get("contactlist").then(function(response){
			console.log("I get the data I requested");
			$scope.contactlist = response.data;
			$scope.contact = null;
		});

	};
	
	refresh();

	$scope.addContact = function(){
		console.log($scope.contact);
		$http.post("/contactlist",$scope.contact).then(function(response){
			console.log(response);
			refresh();
		});
	};

	$scope.remove = function(id){
		console.log(id);
		$http.delete("/contactlist/" + id).then(function(response){
			console.log(response);
			refresh();
		});
	};
}]);