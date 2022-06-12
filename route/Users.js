const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const { User } = require('../models')

const dotenv = require('dotenv')
dotenv.config({ path: '.env' })

router.post('/register', (req, res) => {
    const { first_name, last_name, user_image, country, region, city, email, password, token, phone, position, member, type, verify } = req.body

    if (!email) {
        res.status(400).json({
            error: 'please enter your email'
        })
    }
    if (!password) {
        res.status(400).json({
            error: 'please setup your passoword'
        })
    }
    if (!first_name) {
        res.status(400).json({
            error: 'Please enter your first name'
        })
    }
    if (!last_name) {
        res.status(400).json({
            error: 'Please enter your last name'
        })
    }

    const userData = {
        first_name: first_name,
        last_name: last_name,
        user_image: user_image,
        country: country,
        region: region,
        city: city,
        member: "general",
        position: position,
        email: email,
        phone: phone,
        password: password,
        type: "email register",
    }


    User.findOne({
        where: {
            email: req.body.email,
            type: "email register"
        }
    }).then(user => {
        //see if the user is already created, if not then User.create
        if (!user) {
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                userData.password = hash
                User.create(userData)
                    .then(user => {
                        let token = jwt.sign(userData, process.env.SECRET_KEY, {
                            expiresIn: '2d'
                        })

                        res.status(200).json({ loggedIn: true, token: token })
                    })
                    .catch(err => {
                        console.log(err)
                    })
            })
        } else {
            res.status(409).json({ error: 'User already exists' })
        }
    })
        .catch(err => {
            res.status(400).json({ error: err })
            // res.send('error: ' + err)
        })
})

router.post('/login', (req, res) => {

    if (!req.body.email) {
        res.status(400)
        res.json({
            error: 'please enter your register email'
        })
    }
    if (!req.body.password) {
        res.status(400)
        res.json({
            error: 'please enter password'
        })
    }
    User.findOne({
        where: {
            email: req.body.email,
            type: "email register"
        }
    }).then(user => {
        if (user) {
            if (bcrypt.compareSync(req.body.password, user.password)) {
                let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
                    expiresIn: '2d'
                })
                res.status(200).json({ loggedIn: true, token: token })
                console.log("user login")
            } else {
                res.status(400).json({ error: 'password incorrect' })
            }
        } else {
            res.status(400).json({ error: 'email is not register' })
        }
    })
        .catch(err => {
            res.status(400).json({ error: err })
        })

})

//get all users
router.get('/users', async (req, res) => {
    try {
        const users = await User.findAll()
        return res.json(users)
    } catch (err) {
        console.log(err)
        return res.status(500).json({ error: "Something went wrong" })
    }
})

router.get('/:id', function (req, res, next) {
    User.findOne({
        where: {
            uuid: req.params.id
        }
    })
        .then(user => {

            if (user) {
                res.json(user)
            } else {
                res.send('User does not exist')
            }
        }).catch(err => {
            res.send('error:' + err)
        })
})

//use for facebook login and google login that do not have location
router.put('/region/edit/:uuid', async (req, res) => {
    try {
        const userupdate = User.update({
            country: req.body.country,
            region: req.body.region,
            city: req.body.city,
        },{ where: { uuid: req.params.uuid } })

        return res.json(userupdate)
    } catch (err) {
        console.log(err)
        return res.status(500).json({error:"user region update dose not work out"})
    }
})

router.put('/edit/:uuid', function (req, res, next) {

    User.update(
        {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            country: req.body.country,
            region: req.body.region,
            city: req.body.city,
            phone: req.body.phone,
            position: req.body.position,

        },
        { where: { user_id: req.params.id } })
        .then(() => {
            res.json({ status: 'successful updated' })
        })
        .catch(err => console.log('error: ' + err));


})


//find all the question that the user have
router.get('/question/:uuid', async (req, res) => {
    const uuid = req.params.uuid
    try {
        const user = await User.findOne({
            where: { uuid },
            include: 'questions',
        })

        return res.json(user)
    } catch (err) {
        console.log(err)
        return res.status(500).json({ error: 'error came from user question' })
    }
})

module.exports = router