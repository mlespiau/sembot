var should = require('should');
var TaskManager = require('../taskmanager.js');
var tm = new TaskManager();

describe('Test', function() {
    it('should have 0 tasks', function(done) {
        should.exist(tm);
        should(tm.getTasks().length).be.exactly(0);
        done();
    });

    it('should add new task', function(done) {
        tm.add('new task')
        should(tm.getTasks().length).be.exactly(1);
        should(tm.getTasks()[0]).be.equal('new task');
        done();
    });
});
