module.exports = function(app) {
	
	var api = app.services.taskService;

	app.route('/v1/tasks/')
		.get(api.tasks)
		.post(api.register)
		

    app.route('/v1/tasks/:id')
		.delete(api.remove)


};