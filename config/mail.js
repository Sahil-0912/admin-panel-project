const { createTransport } = require("nodemailer");

const transport = createTransport({
    service: 'gmail',
    auth: {
        user: "sahilvaghela975@gmail.com",
        pass: "ppty ypeo itjj pjye"
    }
})

async function sendemail(to, subject,html) {
    const option = {
        from: "sahilvaghela975@gmail.com",
        to: to,
        subject: subject,
        // text: "hello good morning"
        // html:"<h1> hello good morning"
        html:html
    }

    await transport.sendMail(option, (err, info) => {
        if (err) {
            console.log(err);
        } else {
            console.log("send mail...");

        }
    })
}

module.exports = sendemail