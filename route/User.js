const express = require('express')
const router = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const { User, UserLikeCrop, Cropbase } = require('../models')


const dotenv = require('dotenv')
dotenv.config({ path: '.env' })

const { OAuth2Client } = require('google-auth-library')
const { v4: uuid } = require('uuid');
const sendEmail = require('../util/sendEmail')

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID)
router.use(cors())

//image 
const multer = require('multer')
const upload = multer({ dest: 'useruploads/' })
const { uploadFile, getFileStream } = require('../s3')

const frontendUrl = process.env.FRONTENDURL

//third party login
router.post('/google-login', async (req, res) => {

    const token = req.body.token;
    console.log(token);
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.GOOGLE_CLIENT_ID
    })
    const data = ticket.getPayload();
    console.log(data)


    const userData = {
        first_name: data.family_name,
        last_name: data.given_name,
        email: data.email,
        token: data.sub,
        user_image: data.picture,
        type: 'google'
    }

    console.log(userData)

    User.findOne({
        where: {
            token: data.sub
        }
    }).then(user => {
        if (!user) {
            User.create(userData)
                .then(user => {
                    let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
                        expiresIn: 1440
                    })
                    res.send({ loggedIn: true, token: token })
                    console.log("user create and login")
                })
        } else {
            let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
                expiresIn: 1440
            })
            res.send({ loggedIn: true, token: token })
            console.log("already have user")
        }

    })

})

router.post('/facebook-login', async (req, res) => {
    const userData = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        token: req.body.token,
        user_image: req.body.user_image,
        type: 'facebook',
    }

    User.findOne({
        where: {
            token: req.body.token
        }
    }).then(user => {
        if (!user) {
            User.create(userData)
                .then(user => {
                    let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
                        expiresIn: 1440
                    })
                    res.send({ loggedIn: true, token: token })
                    console.log("user create and login")
                })
        } else {
            let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
                expiresIn: 1440
            })
            res.send({ loggedIn: true, token: token })
            console.log("already have user")
        }

    })
})
//update location for facebook login and google login that do not have location 
router.put('/region/edit/:uuid', async (req, res) => {
    User.update(
        {
            country: req.body.country,
            region: req.body.region,
            city: req.body.city,
        },
        { where: { uuid: req.params.uuid } })
        .then(() => {
            res.json({ status: 'successful updated' })
        })
        .catch(err => console.log('error: ' + err));

})


// email register and login
router.post('/register', (req, res) => {
    const { first_name, last_name, user_image, country, region, city, email, password, token, phone, position, member, verify } = req.body

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

    const verificationString = uuid()

    const userData = {
        first_name: first_name,
        last_name: last_name,
        user_image: user_image,
        country: country,
        region: region,
        city: city,
        member: "general",
        position: "farmer",
        email: email,
        phone: phone,
        password: password,
        type: "email register",
        verify:false,
        verification_string:verificationString
    }


    User.findOne({
        where: {
            email: email,
            type: "email register"
        }
    }).then(user => {
        //see if the user is already created, if not then User.create
        if (!user) {
            bcrypt.hash(password, 10, (err, hash) => {
                console.log(hash)
                userData.password = hash
                User.create(userData)
                    .then(user => {
                        let token = jwt.sign(userData, process.env.SECRET_KEY, {
                            expiresIn: '2d'
                        })
  
                        try{
                            sendEmail({ from:'agrollytaiwan@outlook.com',
                            to: email, 
                            subject: 'Eamil verify - Agrolly Taiwan',
                            text:`
                                Thanks for signing up! To verify your email, click here:
                                ${frontendUrl}/user/verify-email/${verificationString}
                            `})
                            console.log("email send successful")
                            res.status(200).json({ loggedIn: true, token: token })
                        }catch(e){
                            console.log(e);
                            res.status(500);
                        }

                       
                    })
                    .catch(error => {
                        console.log(error.message)
                        res.status(409).json({ error: error.message })
                    })
            })
        } else {
            res.status(409).json({ error: 'your email already register, please try forget passworld' })
        }
    })
        .catch(err => {
            res.status(400).json({ error: err })
        })
})

router.put('/verify', (req, res) =>{
    const { verificationString } = req.body;
    User.findOne({
        where: {
            verification_string: verificationString
        }
    }).then((user) =>{

        try {
            const userupdate = User.update({
                verify : true
            }, { where: { verification_string: verificationString } })
    
            res.json(userupdate)
        } catch (err) {
            console.log(err)
            res.status(500).json({ error: "email verification code is incorrect" })
        }

    }).catch(err =>{
        res.status(401).json({ err })
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

            if(user.verify === false){
                res.status(400).json({ error: 'please verify your email frist' })
            }else if (bcrypt.compareSync(req.body.password, user.password)) {
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

router.get('/:uuid', function (req, res, next) {
    User.findOne({
        where: {
            uuid: req.params.uuid
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

// upload user image
router.put('/uploadimage/:uuid', upload.single('file'), async (req, res) => {
    const useruuid = req.params.uuid

    try {
        const file = req.file
        console.log(file)
        const result = await uploadFile(file)
        console.log(result)
        const user = await User.findOne({ where: { uuid: useruuid } })
        user.user_image = `${process.env.BACKENDURL}/users/images/${result.Key}`
        await user.save()
        return res.json(user)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: 'crop image storage error' })
    }

})

router.get('/images/:key', (req, res) => {
    const key = req.params.key
    const readStream = getFileStream(key)
    console.log(readStream)
    readStream.pipe(res) 
})

router.put('/edit/:uuid', function (req, res, next) {

    User.update(
        {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            region: req.body.region,
            city: req.body.city,
            phone: req.body.phone,
            position: req.body.position,

        },
        { where: { uuid: req.params.uuid } })
        .then(() => {
            res.json({ status: 'successful updated' })
        })
        .catch(err => {
            console.log('error: ' + err)
            res.status(500).json({ error: "user edit error" })
        });


})

//update password after login
router.put('/passwordreset/:uuid', function (req, res, next) {

    User.findOne({
        where: {
            uuid: req.params.uuid
        }
    }).then(user => {
        if (user) {
            if (bcrypt.compareSync(req.body.oldPassword, user.password)) {
                console.log("old password correct")
                bcrypt.hash(req.body.newPassword, 10, (err, hash) => {
                    req.body.newPassword = hash
                    User.update(
                        { password: req.body.newPassword },
                        { where: { uuid: req.params.uuid } }
                    ).then(() => {
                        console.log("password update")
                        res.json({ status: 'password successful update' })
                    }).catch(err => console.log('error: ' + err));
                })
            } else {
                res.status(400).json({ error: 'the old password is not correct, you can try to log out and click forget password if you forget your passowrd' })
            }
        }
    }).catch(err => {
        res.send('error: ' + err)
    })


})

router.put('/forgotPassword/:id', async (req, res) => {
    const emailValue = req.params.id;
    const passwordResetCode = uuid();
    console.log(emailValue)

    User.findOne({
        where: {
            email: emailValue,
            type: "email register"
        }
    }).then(useremail => {
        if (useremail) {
            User.update({ password: passwordResetCode }, {
                where: {
                    email: emailValue,
                    type: "email register"
                }
            }).then(async () => {
                try {
                    await sendEmail({
                        to: emailValue,
                        from: "agrollytaiwan@outlook.com",
                        subject: "password Reset for Agrolly Taiwan Account",
                        text: `
                               To reset your password please click the link below:
                               \n 密碼更改請點選下面的連結：
                               ${frontendUrl}/user/passwordReset/${passwordResetCode}
                               `
                            
                    })
                    
                    res.sendStatus(200)
                } catch (e) {
                    console.log(e);
                    res.sendStatus(500);
                }
            })
        } else {
            res.status(500).json({ error:"you are not yet register"})
        }

    }).catch(err => console.log('error: ' + err));

    // res.sendStatus(200)

})


router.put('/resetPassword/:id', async (req, res) => {
    const passwordResetCode = req.params.id;
    const { password } = req.body;
    console.log(passwordResetCode)
    User.findOne({
        where: {
            password: passwordResetCode
        }
    }).then(
        bcrypt.hash(req.body.password, 10, (err, hash) => {
            req.body.password = hash

            User.update({ password: req.body.password },
                { where: { password: passwordResetCode } }
            ).then(() => {
                console.log("password successful reset")
                // res.json({ status: 'password successful reset' })
            }).catch(err => console.log('error: ' + err));
        })

    )
        .catch(err => {
            res.send('error: ' + err)
        })
    res.sendStatus(200)
})

//find all the question that the user have
router.get('/questions/:uuid', async (req, res) => {
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

//find all the user like crop
router.get('/like/:uuid', async (req, res, next) => {
    const uuid = req.params.uuid

    try {
        const user = await User.findOne({
            where: { uuid },
            include: [
                {
                    model: UserLikeCrop,
                    as: 'userlikecrop',
                    attributes: ['cropId'],
                    include: [
                        {
                            model: Cropbase,
                            as: 'cropbase',
                            // attributes : ['pic_path','name','name_en','type','discription'],
                        }

                    ]
                },

            ]

        })

        return res.json(user)
    } catch (err) {
        console.log(err)
        return res.status(500).json({ error: 'error came from user like' })
    }

})


module.exports = router