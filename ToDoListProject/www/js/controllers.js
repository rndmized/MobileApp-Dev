angular.module('starter.controllers', [])

/* initCtrl loads data from local storage when app is loaded */
.controller('initCtrl', function ($scope, $state, Task) {
    $scope.getTasks = Task.getTasks;

})

/* Maps functions in the service with the view ToDo*/
.controller('TODOCtrl', function ($scope, $state, $ionicPopup, Task) {

    $scope.data = Task.data;
    $scope.addTask = Task.addTask;
    $scope.completeTask = Task.completeTask;
    $scope.getDetails = Task.goDetails;
    $scope.getTask = Task.getTask;
    
    /* Calling the default ionic popup  */
    $scope.deleteTask = function () {
        var confirmPopup = $ionicPopup.confirm({
            title: 'Delete Task',
            template: 'Are you sure you want to delete this Task?'
        });
        confirmPopup.then(function (res) {
            if (res) {
                /* If user taps confirm call deleteTask */
                Task.deleteTask();
            }
        });
    };



})
/* Maps functions in the service with the view New Task*/
.controller('NewTaskController', function ($scope, $state, Task) {

    $scope.data = Task.data;
    $scope.addTask = Task.addTask;
    
    //Rather than go to the previous view it returns the use to the main ToDo view.
    $scope.goBack = function () {
        $state.go('tab.TODO');
    }
})



.controller('CompletedCtrl', function ($scope, $state, $ionicPopup, Task) {

    $scope.data = Task.data;
    $scope.getDetails = Task.goDetails;
    $scope.uncompleteTask = Task.uncompleteTask;
    $scope.deleteCompletedTask = function () {
        var confirmPopup = $ionicPopup.confirm({
            title: 'Delete Task',
            template: 'Are you sure you want to delete this Task?'
        });
        confirmPopup.then(function (res) {
            if (res) {
                /* If user taps confirm call deleteTask */
                Task.deleteCompletedTask();
            }
        });
    };
    

})

/* Maps functions in the service with the view Details*/
.controller('DetailsCtrl', function ($scope, $state, Task) {

    $scope.data = Task.data;
    $scope.details = Task.details;
    
    //Rather than go to the previous view it returns the use to the main ToDo view.
     $scope.goBack = function () {
        $state.go('tab.TODO');
    }
});
