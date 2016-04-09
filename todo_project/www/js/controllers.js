angular.module('starter.controllers', [])

.controller('_todoCtrl', function($scope) {
    
    $scope.mylist = [1,2,3];
    
    $scope.add = function(){
        
        $scope.mylist.push($scope.mylist[$scope.mylist.length-1]+1);
    };

})


.controller('CompletedCtrl', function($scope) {
    
    
    
    $scope.complete = function(){
        console.log("Completed");
    }
    
     $scope.delete = function(){
        console.log("Deleted");
    }
    
    
});
