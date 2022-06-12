var express = require('express')
const { sequelize } = require('./models')

var app = express()
var port = process.env.PORT || 5000

app.use(express.json())

var Users = require('./route/Users');
var Question = require('./route/Question')
var CropBase = require('./route/CropBase')

app.use('/users', Users)
app.use('/question', Question)
app.use('/crops', CropBase)

app.listen(port, async () => {
    console.log('Server is running on port: ' + port)
    await sequelize.authenticate()
    console.log('Database Connected!')
})