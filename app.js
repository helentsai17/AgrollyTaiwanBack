var express = require('express')
const { sequelize } = require('./models')

var app = express()
var port = process.env.PORT || 5000

app.use(express.json())

var Users = require('./route/User');
var Question = require('./route/Question')
var CropBase = require('./route/CropBase')
var KcValue  = require('./route/KcValue')
var Temperature = require('./route/Temperature')
var Message = require('./route/Message')
var Fertilize = require('./route/Fertilize')
var PestDisease = require('./route/PestDisease')

app.use('/users', Users)
app.use('/question', Question)
app.use('/message', Message)
app.use('/crops', CropBase)
app.use('/kc', KcValue)
app.use('/temp', Temperature)
app.use('/fertilize', Fertilize)
app.use('/pestdisease', PestDisease)

app.listen(port, async () => {
    console.log('Server is running on port: ' + port)
    await sequelize.authenticate()
    console.log('Database Connected!')
})