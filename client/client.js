var app = angular.module('myApp', []);

app.controller('mainController', ['$scope', 'GithubService', function($scope, GithubSevice){
    console.log('this is working');
    $scope.git = GithubSevice.data;
    GithubSevice.makeCall();

}]);

app.factory('GithubService', ['$http', function($http){
    var data = {};

    var makeCall = function(){
        $http.jsonp('https://api.github.com/users/Hinges/events?callback=JSON_CALLBACK').then(function(response){

            data.data = response.data.data;
            console.log(response.data.data)

        });
    };

return {
    makeCall: makeCall,
    data: data
}


}]);