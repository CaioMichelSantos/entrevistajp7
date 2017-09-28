var increarId = 3;

var tasks = [
	{id: 1, taskDescription: 'First task inserted description'},
	{id: 2, taskDescription: 'Second task inserted description'}
];

var api = {};

api.tasks = function(req, res) {

	res.json(tasks);
};

api.register = function(req, res) {

	var newTask = {
	id: increarId++, taskDescription : req.body.newTask};

	tasks.push(newTask);

	res.json(tasks);
	
};

api.remove = function(req, res) {
    tasks = tasks.filter(function(task) {
		return task.id != req.params.id;
	});

	res.json(tasks);
	
};


module.exports = api;