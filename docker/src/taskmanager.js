module.exports = TaskManager;

function TaskManager() {
    this._backlog = [];
}

TaskManager.prototype.add = function(task) {
    this._backlog.push(task);
}

TaskManager.prototype.getTasks = function(task) {
    return this._backlog;
}

TaskManager.prototype.asString = function() {
    return "Backlog:\n" + this._backlog.map(function(task) {
        return ' * ' + task;
    }).join("\n");
}
