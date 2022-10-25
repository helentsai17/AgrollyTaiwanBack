const sendgrid = require('@sendgrid/mail')
const dotenv = require('dotenv')

dotenv.config({ path: '.env' })

sendgrid.setApiKey(process.env.SENDGRID_API_KEY)

const sendEmail = ({to, from , subject, text, html}) =>{
    const msg = {to, from , subject, text, html};
     return sendgrid.send(msg);
    
}

module.exports = sendEmail