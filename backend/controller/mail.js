const nodemailer = require("nodemailer");

const sender = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'ypatoriya.netclues@gmail.com',
        pass: 'tspy dwni dqmm kibp'
    }
});

const mail = {
    from: process.env.EMAIL,
    to:
        'ypatoriya.netclues@gmail.com',
    subject: 'Excel mail',
    text: 'Excel there!',
    html:
        '<h1>Excel</h1>',
    attachments: [
        {
            filename: 'products.xlsx',
            filepath: '/products.xlsx'
        }
    ]
};

sender.sendMail(mail, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent successfully: '
            + info.response);
    }
});