module.exports = app => {
    app.post('/singup', app.api.user.save)
}