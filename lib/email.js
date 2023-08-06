require('../controllers/settings');
const nodemailer = require('nodemailer');

const mailer = {
  inboxGmailRegist: (email, codeVerify) => {
    try {
      const inboxGmail = `<div style="/*background: black; color: white; */line-height: 2; position: relative; padding: 1px 20px; width: 320px; min-height: 200px; margin: auto; border: 1px solid #DDD; border-radius: 15px;">
	<h3>Welcome to DannTeam API</h3>
	<small>
		Thank you for registering. Please verify your account in our database. Your link will expire in 30 minutes:
		<a style="cursor: pointer; text-align: center; display: block; width: 110px; margin: 10px auto; padding: 5px 5px; border: 1px solid #000; border-radius: 5px; color: #6CD600; text-decoration: none; font-size: 5px; font-weight: 500;" href="${codeVerify}">Verify Your Account</a>
	</small>
	<small>If the button doesn't work, please open the link:
    	<a style="text-decoration: none;" href="${codeVerify}">Here</a>
    </small>
    <footer style="text-align: center; font-size: 10px;">
		Copyright &copy; 2023 <a style="text-decoration: none;" href="https://www.instagram.com/dannnalwaysalone">DannTeam</a>. All rights reserved.
	</footer>
</div>`;

      let transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smpt.gmail.com',
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
          user: my_email,
          pass: my_email_password,
        },
      });

      let mailOptions = {
        from: '"DannTeam API" <no-reply@gmail.com>',
        to: email,
        subject: 'Verify your email - DannTeam',
        html: inboxGmail,
      };

      transporter.sendMail(mailOptions, (err) => {
        if (err) { console.log(err); }
      });
    } catch (error) { console.log(error); }
  },
};

module.exports = mailer;