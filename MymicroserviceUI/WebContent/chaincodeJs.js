var app = angular.module('demo', [])

alert('chaincodejs')
app.controller('loginCnt', function($scope,$rootScope, $http) {
	alert('in Hello');
	$scope.go = function() {
		var userId = $scope.uname;
		alert('in controller '+userId)
        var uri ='http://localhost:8090/hello/chaincode/'+userId
        alert(uri)
		$http.get(uri).
        then(function(response) {
        	alert(response.data);
        	$rootScope.bidString = response.data;
        	alert('in last'+$rootScope.bidString);
            window.location.href= "/MymicroserviceUI/tender.html";
        });
  }
	$scope.goBid = function() {

		$http.get('http://localhost:8090/hello/bid').
        then(function(response) {
        	document.getElementById("chaincodeDiv2").style.display = "block";
            $scope.postBid = response.data;
        });
  }
    
})

app.controller('tendCnt', function($scope,$rootScope,$http) {
	alert('in Hello2'+$scope.bidString);
	$scope.greeting=$rootScope.bidString;
    
})