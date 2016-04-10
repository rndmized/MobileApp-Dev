angular.module('starter.controllers', [])

.controller('TODOCtrl', function ($scope, $state, Task) {

    $scope.data = Task.data;
    $scope.newData = "";
    $scope.addTask = Task.addTask;
    $scope.deleteTask = Task.deleteTask;
    $scope.completeTask = Task.completeTask;
    $scope.getDetails = Task.goDetails;
    $scope.getTask = Task.getTask;


})

.controller('NewTaskController', function ($scope, $state, Task) {

    $scope.data = Task.data;
    $scope.newData = "";
    $scope.addTask = Task.addTask;
    $scope.deleteTask = Task.deleteTask;
    $scope.goBack = function () {
        $state.go('tab.TODO');
    }
})



.controller('CompletedCtrl', function ($scope, $state, Task) {

    $scope.data = Task.data;
    $scope.getDetails = Task.goDetails;

})

.controller('DetailsCtrl', function ($scope, $state, Task) {

    $scope.data = Task.data;
    $scope.details = Task.details;
     $scope.goBack = function () {
        $state.$ionicGoBack;
    }

});
