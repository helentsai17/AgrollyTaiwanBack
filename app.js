var express = require('express')
require('dotenv').config
const { sequelize } = require('./models')
var cors = require('cors')

var app = express()
var port = process.env.PORT || 5000

app.use(express.json())
app.use(cors()) 

var Users = require('./route/User');
var Question = require('./route/Question')
var CropBase = require('./route/CropBase')
var KcValue  = require('./route/KcValue')
var Temperature = require('./route/Temperature')
var Message = require('./route/Message')
var Fertilize = require('./route/Fertilize')
var PestDisease = require('./route/PestDisease')
var Like = require('./route/UserLikeCrop')

app.use('/users', Users)
app.use('/question', Question)
app.use('/message', Message)
app.use('/crops', CropBase)
app.use('/kc', KcValue)
app.use('/temp', Temperature)
app.use('/fertilize', Fertilize)
app.use('/pestdisease', PestDisease)
app.use('/like', Like)

app.listen(port, async () => {
    console.log('Server is running on port: ' + port)
    await sequelize.authenticate()
    console.log('Database Connected!')
})