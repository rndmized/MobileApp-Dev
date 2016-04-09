angular.module('starter.controllers', [])

.controller('TODOCtrl', function ($scope, $state, Task) {

    $scope.data = Task.data;
    $scope.newData = "";
    $scope.addTask = Task.addTask;
    $scope.deleteTask = Task.deleteTask;
    $scope.completeTask = Task.completeTask;
    $scope.getDetails = Task.goDetails;
    
    /*
    $scope.getDetails = function () {
        $state.go('task-details');
    }*/

})

.controller('NewTaskController', function ($scope, Task) {

    $scope.data = Task.data;
    $scope.newData = "";
    $scope.addTask = Task.addTask;
    $scope.deleteTask = Task.deleteTask;

})



.controller('CompletedCtrl', function ($scope, $state, Task) {

    $scope.data = Task.data;
    $scope.getDetails = function () {
        $state.go('task-details');
    }

})

.controller('DetailsCtrl', function ($scope, $state, Task) {

    $scope.data = Task.data;
    $scope.details = Task.details;

});
