angular.module('starter.services', [])

.factory('Task', function ($state) {



    var data = {
        tasks: [],
        completedTasks: []
    }

    var details = {
        title: "title",
        notes: "notes",
        date: new Date()
    }

    var getAll = function () {
        var storedData = window.localStorage['Tasks'];
        if (storedData) {
            return angular.fromJson(storedData);
        }
        return [];
    }

    var getTasks = function () {
        var storedData = localStorage.getItem("Tasks");
        console.log("Getting Tasks");
        if (storedData !== null) {
            var tasker = getAll();
            data.tasks = tasker.tasks;
            data.completedTasks = tasker.completedTasks;
            console.log("Reading Tasks into Data");
        }


    }

    var saveTasks = function () {
        var tasks_update = angular.toJson(data);
        localStorage.setItem("Tasks", tasks_update);
    }

    var goDetails = function (task) {
        details.title = task.title;
        details.date = task.added;
        details.notes = task.notes;
        $state.go('task-details');
    }

    var goDetailsCompleted = function (task) {
        details.title = completeTask.title;
        details.date = completeTask.added;
        details.completed_on = completeTask.completed_on;
        details.notes = completeTask.notes;
        $state.go('task-details');
    }

    var goBack = function () {
        $state.goBack;
    }

    function addTask(title, date, notes) {
        var task = {
            title: title,
            added: date,
            notes: notes
        };
        data.tasks.push(task);
        saveTasks();
    }

    function addCompletedTask(complete_task) {
        var task = {
            title: complete_task.title,
            added: complete_task.added,
            completed_on: new Date(),
            notes: complete_task.notes
        };
        data.completedTasks.push(task);
        saveTasks();
    }
    function uncompleteTask(task){
        var index = data.completedTasks.indexOf(task);
        var uncompletedTask = data.completedTasks.splice(index, 1);
        data.tasks.push(uncompletedTask.shift());
        saveTasks();
        
    }

    function completeTask(task) {
        var index = data.tasks.indexOf(task);
        var completedTask = data.tasks.splice(index, 1);
        addCompletedTask(completedTask.shift());
        console.log("Completed");
    }

    function deleteTask(task) {
        var index = data.tasks.indexOf(task);
        data.tasks.splice(index, 1);
        saveTasks();
        console.log("Deleted");
    }
    
    function deleteCompletedTask(task) {
        var index = data.completedTasks.indexOf(task);
        data.completedTasks.splice(index, 1);
        saveTasks();
        console.log("Deleted");
    }
    
    
    

    return {
        data: data,
        addTask: addTask,
        deleteTask: deleteTask,
         deleteCompletedTask: deleteCompletedTask,
        completeTask: completeTask,
        goDetails: goDetails,
        details: details,
        goBack: goBack,
        getTasks: getTasks,
        uncompleteTask:uncompleteTask
    };
});
