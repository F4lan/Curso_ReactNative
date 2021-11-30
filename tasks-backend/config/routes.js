module.exports = app => {
    app.post('/singup', app.api.user.save)
    app.post('/singin', app.api.auth.signin)

    app.route('/tasks')
        .all(app.config.passaport.authenticate())
        .get(app.api.task.getTasks)
        .post(app.api.task.save)

    app.route('/tasks/:id')
        .all(app.config.passaport.authenticate())
        .delete(app.api.task.remove)

    app.route('/tasks/:id/toggle')
        .all(app.config.passaport.authenticate())
        .put(app.api.task.toggleTask)
}