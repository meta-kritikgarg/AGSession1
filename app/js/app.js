var MyApp = angular.module('customerApp',[]);
MyApp.controller('customerController' , function($scope,$http)
{
  $http.get('http://rest-service.guides.spring.io/greeting').
        then(function(response) {
            $scope.greeting = response.data;
        });
  $scope.orderProp = 'age';
})
