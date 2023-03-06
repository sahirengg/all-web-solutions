const nodemailer = require('nodemailer');
const config = require('config');
const email_pass = config.get('EMAIL_PASS')
const contactPerson = config.get('CONTACT_PERSON');
const compEmail = config.get('COMPANY_EMAIL');
const compName = config.get('COMPANY_NAME');
const msg = config.get('MESSAGE');
const email_subject = config.get('SUBJECT');
const port = config.get('PORT')
const service = config.get('SERVICE')
const mob_no = config.get('MOB_NO')
const email_host = config.get('EMAIL_HOST')

function EmailSent(emailAdd) {
    const transporter = nodemailer.createTransport({
        service: service,
        host: email_host,
        port: port,
        secure: true,
        auth: {
            user: compEmail,
            pass: email_pass,
        },
    });
    const ph = '9318304518'
    let htmlContent = `
                    <h1><strong>Contact Form</strong></h1>
                    <p>Hi,</p>
                    <p>${emailAdd?.name} </p>
                    <br/>
                    <p>Thank you for contacting to all web solutions . We would arrange the suitable meeting for the discussion of your requirement</p>
                    <p>Mean while for any further help you can write us on Email: ${compEmail}</p>
                    <p>Phone: ${mob_no}</p>
                    <p>Company Name: ${compName}</p>
                    <b>Thanks & Regards</b>
                    <br />
                    <b>All Web Solutions<b/>
                    <footer>This is system generated email please do not reply</footer>
                    `


    let mailOptions = {
        from: compEmail,
        to: emailAdd?.email,
        subject: email_subject,
        html: htmlContent
    };
    transporter.sendMail(mailOptions, function (error, info) {
        console.log("mailOptions------------->", mailOptions)

        if (error) {
            console.log("error----->>>>>?", error);
        } else {
            console.log(`Email has been sent to ${mailOptions.to}` + info.response);
        }
    });




    transporter.sendMail(mailOptions, function (error, info) {

        if (error) {
            console.log("error----->>>>>?", error);
        } else {
            console.log(`Email has been sent to ${mailOptions.to}` + info.response);
        }
    });
}



module.exports = EmailSent