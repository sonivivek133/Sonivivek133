const express=require('express')
var app = express()

const cors=require('cors')
var nodemailer=require('nodemailer')
const smtpTransport=require('nodemailer-smtp-transport')

var transporter = nodemailer.createTransport(
    smtpTransport({
    service:'gmail',
    port:465,
    auth:{
        user:'Sonivivek133@gmail.com',
        pass:'vivek4031',
    
    }
}));
 



const bodyparser=require('body-parser')

// app.use(bodyparser.urlencoded({extended:false})) 
app.use(bodyparser.json()) 
app.use(cors({origin:"*"}))
app.post('/login',function (req,res){
console.log(req.body);
    console.log("login requste came")
    console.log(req.body);
    var mailOptions={
        from:'Sonivivek133@gmail.com',
        to:req.body.to,
        subject:req.body.subject,
        text:req.body.text
    }
  transporter.sendMail(mailOptions,function(err,info){
      if(err){
          console.log(err);

      }
      else{
          console.log('email send',info);
      }
  })

})

app.listen(4000,console.log("Server is running"));