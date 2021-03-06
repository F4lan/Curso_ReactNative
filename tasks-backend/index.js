const express = require('express')
const app = express()
const db = require('./config/db')
const consign = require('consign')
const bp = require('body-parser')

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

consign()
    .include('./config/passaport.js')
    .then('./config/midlewares.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app)

app.db = db

app.listen(3000, () => {
    console.log('Backend Iniciando ...')
})