var express = require('express')
var bodyParser  = require('body-parser');

require('dotenv').config
const { sequelize } = require('./models')
var cors = require('cors')

var app = express()
var port = process.env.PORT || 5000

app.use(express.json())
app.use(cors()) 
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));


var Users = require('./route/User');
var Question = require('./route/Question')
var CropBase = require('./route/CropBase')
var KcValue  = require('./route/KcValue')
var Temperature = require('./route/Temperature')
var Message = require('./route/Message')
var Fertilize = require('./route/Fertilize')
var PestDisease = require('./route/PestDisease')
var Like = require('./route/UserLikeCrop')
var UserCrop = require('./route/UserCrop')
var VerifyData = require('./route/Verifydata');
var Forecast = require('./route/Forecast')
var Media = require('./route/Media')
var Seasonplant = require('./route/SeasonPlant')
var CropDiary = require('./route/CropDiary')


app.use('/users', Users)
app.use('/question', Question)
app.use('/message', Message)
app.use('/crops', CropBase)
app.use('/kc', KcValue)
app.use('/temp', Temperature)
app.use('/fertilize', Fertilize)
app.use('/pestdisease', PestDisease)
app.use('/like', Like)
app.use('/usercrop', UserCrop)
app.use('/verify', VerifyData)
app.use('/forecast', Forecast)
app.use('/media', Media)
app.use('/seasonplant', Seasonplant )
app.use('/diary', CropDiary)

app.listen(port, async () => {
    console.log('Server is running on port: ' + port)
    await sequelize.authenticate()
    console.log('Database Connected!')
})