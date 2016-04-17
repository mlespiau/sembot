var should = require('should');
var TaskManager = require('../taskmanager.js');
var tm = new TaskManager();

describe('TaskManager', function() {
    beforeEach(function() {
        tm = new TaskManager();
    });

    describe('#constuctor', function() {
        it('should start with 0 tasks', function(done) {
            should.exist(tm);
            should(tm.getTasks().length).be.exactly(0);
            done();
        });
    });
    describe('#add', function() {
        it('should add new task', function(done) {
            tm.add('new task');
            should(tm.getTasks().length).be.exactly(1);
            should(tm.getTasks()[0]).be.equal('new task');
            done();
        });
    });
    describe('#asString', function() {
        it('should return formatted list of two backlog tasks', function(done) {
            tm.add('Task 1');
            tm.add('Task 2');
            should(tm.asString()).be.exactly("Backlog:\n * Task 1\n * Task 2");
            done();
        });
        it('should return formatted list of one backlog task', function(done) {
            tm.add('Task 1');
            should(tm.asString()).be.exactly("Backlog:\n * Task 1");
            done();
        });
    });
});
