require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const nodemailer = require('nodemailer');

app.use(cors());

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
        user: 'your-email.com',
        pass: 'your-password'
    }
})
const otp = 2345;
const mailOptions = {
    from: 'your-email.com',
    to: 'to-email.com',
    subject: 'This is for testing',
    text: 'Hell from my side: Your OTP is 2310',
    html: `<h3>Your OTP is </h3><br/> <h1>${otp}</h1>`
}



app.get('/', (req, res)=>{
    transporter.sendMail(mailOptions, (err, info)=>{
        if(err){
            console.log(err);
            res.send(err)
        }else{
            res.send(`mail sent succesfully ${info}` )
            console.log(info);
        }
    })
    
})



const PORT = process.env.PORT || 4000;
app.listen(PORT, ()=> console.log('server is running at port', PORT));
