angular.module('starter.controllers', [])

.controller('initCtrl', function ($scope, $state, Task) {
    $scope.getTasks = Task.getTasks;

})


.controller('TODOCtrl', function ($scope, $state, $ionicPopup, Task) {

    $scope.data = Task.data;
    $scope.addTask = Task.addTask;
    $scope.completeTask = Task.completeTask;
    $scope.getDetails = Task.goDetails;
    $scope.getTask = Task.getTask;
    $scope.deleteTask = function () {
        var confirmPopup = $ionicPopup.confirm({
            title: 'Delete Task',
            template: 'Are you sure you want to delete this Task?'
        });
        confirmPopup.then(function (res) {
            if (res) {
                Task.deleteTask();
            } else {
                console.log('Do Nothing');
            }
        });
    };



})

.controller('NewTaskController', function ($scope, $state, Task) {

    $scope.data = Task.data;
    $scope.addTask = Task.addTask;
    $scope.goBack = function () {
        $state.go('tab.TODO');
    }
})



.controller('CompletedCtrl', function ($scope, $state, $ionicPopup, Task) {

    $scope.data = Task.data;
    $scope.getDetails = Task.goDetails;
    $scope.deleteCompletedTask = function () {
        var confirmPopup = $ionicPopup.confirm({
            title: 'Delete Task',
            template: 'Are you sure you want to delete this Task?'
        });
        confirmPopup.then(function (res) {
            if (res) {
                Task.deleteCompletedTask();
            } else {
                console.log('Do Nothing');
            }
        });
    };
    $scope.uncompleteTask = Task.uncompleteTask;

})

.controller('DetailsCtrl', function ($scope, $state, Task) {

    $scope.data = Task.data;
    $scope.details = Task.details;
     $scope.goBack = function () {
        $state.go('tab.TODO');
    }
});
