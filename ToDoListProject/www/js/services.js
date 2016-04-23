angular.module('starter.services', [])

.factory('Task', function ($state) {


    /* Object Data contains an array of Task objects, 
    and an array of Complted Tasks Ojects */
    var data = {
            tasks: [],
            completedTasks: []
        } //end data

    /* Details contains the values in a Task */
    var details = {
            title: "title",
            notes: "notes",
            date: new Date()
        } // end details

    /* getAll returns the tasks stored in the local storage */
    var getAll = function () {
            var storedData = window.localStorage['Tasks'];
            if (storedData) {
                return angular.fromJson(storedData);
            } //end if
            return [];
        } //end getAll

    /* getTasks calls getAll and sets tasks and completed tasks 
    in data to the ones in the local storage */

    var getTasks = function () {
            var storedData = localStorage.getItem("Tasks");
            if (storedData !== null) {
                var tasker = getAll();
                data.tasks = tasker.tasks;
                data.completedTasks = tasker.completedTasks;
            } //end if
        } //end getTasks

    /* saveTasks saves the current data into local storage */
    var saveTasks = function () {
            var tasks_update = angular.toJson(data);
            localStorage.setItem("Tasks", tasks_update);
        } //end saveTasks

    /* goDetails takes a task object set details values equals to task
    details and change view to task-details */
    var goDetails = function (task) {
            details.title = task.title;
            details.date = task.added;
            details.notes = task.notes;
            $state.go('task-details');
        } //end goDetails

    /* goDetailsCompleted takes a completed task object set details values equals to completed task 
    details and change view to task-details */
    var goDetailsCompleted = function (task) {
            details.title = completeTask.title;
            details.date = completeTask.added;
            details.completed_on = completeTask.completed_on;
            details.notes = completeTask.notes;
            $state.go('task-details');
        } //goDetailsCompleted



    /* add task takes input from the view and stores it into a task object. 
    Adds the task object to the tasks array in data. */
    function addTask(title, date, notes) {
        var task = {
            title: title,
            added: date,
            notes: notes
        }; //end task
        data.tasks.push(task);
        saveTasks();
    } //end addTask

    /* Takes a task and adds it to completed tasks in data */
    function addCompletedTask(complete_task) {
        var task = {
            title: complete_task.title,
            added: complete_task.added,
            completed_on: new Date(),
            notes: complete_task.notes
        }; //end local task
        data.completedTasks.push(task);
        saveTasks();
    } //end addCompletedTask

    /* Takes in a task object, gets its position and move it from completed tasks to tasks array */
    function uncompleteTask(task) {
        var index = data.completedTasks.indexOf(task);
        var uncompletedTask = data.completedTasks.splice(index, 1);
        data.tasks.push(uncompletedTask.shift());
        saveTasks();
    } //end uncompleteTask

    /* Moves a task from tasks to completed tasks in data*/
    function completeTask(task) {
        var index = data.tasks.indexOf(task);
        var completedTask = data.tasks.splice(index, 1);
        addCompletedTask(completedTask.shift());
    } //end cimpleteTask

    /* Removes task from array */
    function deleteTask(task) {
        var index = data.tasks.indexOf(task);
        data.tasks.splice(index, 1);
        saveTasks();
    } //end deleteTask

    /* Removes completed task from array */
    function deleteCompletedTask(task) {
        var index = data.completedTasks.indexOf(task);
        data.completedTasks.splice(index, 1);
        saveTasks();
    } //end deleteCompletedTask


    return {
        data: data,
        addTask: addTask,
        deleteTask: deleteTask,
        deleteCompletedTask: deleteCompletedTask,
        completeTask: completeTask,
        goDetails: goDetails,
        details: details,
        getTasks: getTasks,
        uncompleteTask: uncompleteTask
    };
});
