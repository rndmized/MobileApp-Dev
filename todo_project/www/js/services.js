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
    
    var goDetails = function (task) {
        console.log(task);
        console.log(task.title);
        console.log(task.added);
        details.title = task.title;
        details.date = task.added;
        details.notes = "Not yet Implemented";
        $state.go('task-details');
    }


    function addTask(title, date) {
        var task = {
            title: title,
            added: new Date()
        };
        data.tasks.push(task);
    }

    function addCompletedTask(complete_task) {
        var task = {
            title: complete_task.title,
            added: complete_task.added
        };
        console.log(complete_task.title);
        console.log(task.title);
        data.completedTasks.push(task);
    }

    function completeTask(task) {

        var index = data.tasks.indexOf(task);
        var completedTask = data.tasks.splice(index, 1);

        addCompletedTask(completedTask.shift());

        // console.log(completedTask.shift());
        // data.completedTasks.push(completedTask.shift());
        // console.log(data.completedTasks);
        console.log("Completed");
    }

    function deleteTask(task) {
        var index = data.tasks.indexOf(task);
        data.tasks.splice(index, 1);
        console.log("Deleted");

    }

    return {
        data: data,
        addTask: addTask,
        deleteTask: deleteTask,
        completeTask: completeTask,
        goDetails: goDetails,
        details : details
    };
});
