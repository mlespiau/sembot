module.exports = TaskManager;

function TaskManager() {
    this._tasks = [];
}

TaskManager.prototype.add = function(task) {
    this._tasks.push(task);
}

TaskManager.prototype.getTasks = function(task) {
    return this._tasks;
}

TaskManager.prototype.asString = function() {
    return this._tasks.map(function(task) {
        return ' * ' + task;
    }).join("\n");
}
