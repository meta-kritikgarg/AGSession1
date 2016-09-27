var MyApp = angular.module('customerApp',[]);
MyApp.controller('customerController' , function($scope,$http)
{
  $http.get('http://localhost:8080/WSSession02/rest/res/employeelist').
        then(function(response) {
            $scope.greetings = response.data.Employee;
        });

})
